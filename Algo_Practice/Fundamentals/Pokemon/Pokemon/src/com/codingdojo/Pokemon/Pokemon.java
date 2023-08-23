package com.codingdojo.Pokemon;

public class Pokemon {
//	member variables
	private String name;
	private Integer health;
	private String type;
	private static int numOfPokemons = 0;
	
// instantiate the class
	public Pokemon(){
		numOfPokemons ++;
		Pokedex.addMyPokemons(this);
	}
	
	public Pokemon(String name, int health, String type){
		this.name = name;
		this.health = health; 
		this.type = type;
		numOfPokemons ++;
		Pokedex.addMyPokemons(this);
	}
	
//	public methods 
	void attackPokemon(Pokemon pokemon) {
		pokemon.setHealth(pokemon.getHealth() - 10);	
	}
	
//	static methods - call this method as Pokemon.howManyPokemons()
	public static int howManyPokemons(){
		return numOfPokemons;
	}
	
//	getters and setters
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getHealth() {
		return health;
	}
	public void setHealth(Integer health) {
		this.health = health;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
