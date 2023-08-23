import java.util.HashMap;
import java.util.Set;

public class HashMat {
    public static void main(String[] args) {

    HashMap<String, String> songMap = new HashMap<String, String>();
    songMap.put("Today is the Day", "look at us walking");
    songMap.put("Orange and Blue", "colors may pass us by");
    songMap.put("Mountains and Grass", "rolling hills and sharp points");
    songMap.put("Cities and Skylines", "cabs flowing gently");

    Set<String> keys = songMap.keySet();
    for(String key : keys) {
        // System.out.println(key);
        // System.out.println(songMap.get(key));
        if( key.equals("Today is the Day")) {
            System.out.println("***************" + key);
        }

        System.out.println("Track: " + key + " Lyrics: " + songMap.get(key));
    }

    }
}