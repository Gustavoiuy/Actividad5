
export interface Heroe {
    id?:               string;
    superhero:        string;
    publisher:        Publishe;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_image?:       string;
}

export enum Publishe {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}

export interface Publisher {
    id?:               string;
    superhero:        string;
    publisher:        Publishe;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_image?:       string;

   


}

export interface authResponse{
    email: any;
    ok:       boolean,
    uid?:      string,
    name?:     string,
    token?:    string ,
    msg?:      string
}

export interface usuario{
    uid: string,
    name: string
}