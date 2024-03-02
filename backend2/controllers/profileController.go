package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/yash-raj10/techTalkers-Backend/models"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gopkg.in/mgo.v2/bson"
)

const link = "mongodb+srv://yashyoo:yashyoo@cluster0.hmhbmpr.mongodb.net/test"

var collection *mongo.Collection

// mongo init
func init(){
	clientOption := options.Client().ApplyURI(link)

	client, err := mongo.Connect(context.TODO(), clientOption)
	if err != nil{
		log.Fatal(err)
	}
	fmt.Print("Connection Success")

	collection = client.Database("techTalkers").Collection("profiles")
	fmt.Print("instance is ready")
}

// mongo helpers
func addOneProfile(profile models.Profile){
	added, err := collection.InsertOne(context.Background(), profile)
	if err!= nil{
		log.Fatal(err)
	}

	fmt.Println("Added profile with id:", added.InsertedID)
}

func getAllProfile() []bson.M {
	cursor, err := collection.Find(context.Background(), bson.M{})
	if err != nil{
		log.Fatal(err)
	}

	var profiles []bson.M

	for cursor.Next(context.Background()){
		var profile bson.M
		err:= cursor.Decode(&profile)
		if err != nil{
			log.Fatal(err)
		}
		profiles = append(profiles,profile)
	}

	defer cursor.Close(context.Background())
	return profiles

}

func getOneProfile( profileID string) bson.M {
	id, _ := primitive.ObjectIDFromHex(profileID)
	
	var profile bson.M
	err := collection.FindOne(context.Background(), bson.M{"_id": id}).Decode(&profile)
    if err != nil {
        log.Fatal(err)
    }
	
	return profile

}


//fr
func GetAllProfiles(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	allProfiles := getAllProfile()
	json.NewEncoder(w).Encode(allProfiles)
}

func GetOneProfile(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")


	params := mux.Vars(r)
	singleProfile := getOneProfile(params["id"])
	json.NewEncoder(w).Encode(singleProfile)

}



func AddProfile(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Allow-Control-Allow-Methods", "POST")
	

	var profile models.Profile
	fmt.Println("Request Body:", r.Body)
	err := json.NewDecoder(r.Body).Decode(&profile)
	
	if err != nil{
		http.Error(w, err.Error(), http.StatusBadRequest)
        return
	}
	
	addOneProfile(profile)
	json.NewEncoder(w).Encode(profile)
}











