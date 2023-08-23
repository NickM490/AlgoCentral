public class StringManipulator {
    String result = "";
    int index = 0;
    public String trimAndConcat(String string1, String string2) {
        result = string1.trim().concat(string2.trim());
        return result;
    }

    public Integer getIndexOrNull(String string, char char1) {
        if(string.indexOf(char1) < 1) {
            return null;
        }
        else {
            index = string.indexOf(char1);
        }
        return index;
    }

    public Integer getIndexOrNull(String string1, String subString1) {
        if(string1.indexOf(subString1) < 0) {
            return null;
        }
        else {
           index = string1.indexOf(subString1);
        }
        return index;
    }

    public String concatSubString(String stringOne, int int1, int int2, String stringTwo) {
        String start = stringOne.substring(int1, int2);
        String result = start.concat(stringTwo);
        return result;
    }
}
