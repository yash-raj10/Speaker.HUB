package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Profile struct {
	ID primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Github   string        `json:"github"`
	ImageSrc string        `json:"imageSrc"`
	IsA    string        `json:"isA"`
	LinkedIn   string        `json:"linkedIn"`
	Location string        `json:"location"`
	Name    string        `json:"name"`
	Talk1   string        `json:"talk1"`
	Talk1Link string        `json:"talk1Link"`
	Talk2    string        `json:"talk2" `
	Talk2Link   string        `json:"talk2Link" `
	TechStack string        `json:"techStack" `
	Twtr    string        `json:"twtr" `
	Woman    string        `json:"woman"`
	Experience string   `json:"experience"`
}