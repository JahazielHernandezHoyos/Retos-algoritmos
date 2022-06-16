#complete the array function below
#the function is expected to return a STRING_ARRAY
#the function accepts following parameters:
# 1. STRING text
# 2. INTEGER K

text = "the quick brown fox jumps over the lazy brown dog and runs away to a brown house"
k = 2

#la funcion stopWords debe retornar un array con las palabras que se repitan igual o mas de k veces
def stopWords(text, k):
    words = text.split()
    repeated_words = []
    for word in words:
        if word not in repeated_words:
            if words.count(word) >= k:
                repeated_words.append(word)
    return repeated_words

print(stopWords(text,k))


