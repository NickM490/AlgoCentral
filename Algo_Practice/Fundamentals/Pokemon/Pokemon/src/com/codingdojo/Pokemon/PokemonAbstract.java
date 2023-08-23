package com.codingdojo.Pokemon;

public abstract class PokemonAbstract implements PokemonInterface {

	public Pokemon createPokemon(String name, int health, String type){
		Pokemon pokemon = new Pokemon(name, health, type);
		return pokemon;
	}
	public String pokemonInfo(Pokemon pokemon){
		return "Name: " + pokemon.getName() + "Health: " + pokemon.getHealth() + "Type: " + pokemon.getType();
	}
}
