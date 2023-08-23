package com.codingdojo.Pokemon;
import java.util.ArrayList;

public class Pokedex extends PokemonAbstract{
	private static ArrayList<Pokemon> myPokemons;
	
	public void listPokemon(){
		for (int i = 0; i < myPokemons.size(); i++){
			Pokemon pokemon = myPokemons.get(i);
			System.out.println(pokemon.getName());
		}
	}

	public ArrayList<Pokemon> getMyPokemons() {
		return myPokemons;
	}

	public static void addMyPokemons(Pokemon pokemon) {
		myPokemons.add(pokemon);
	}

}