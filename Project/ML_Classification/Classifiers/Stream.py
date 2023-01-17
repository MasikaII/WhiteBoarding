import pyspark

# Dependencies
from pyspark import SparkContext
from pyspark.streaming import StreamingContext

# Creating spark context
sc = SparkContext('local[2]', 'Live')

# Using the streaming context
stream = StreamingContext(sc, 50)

# Creating a DStream that will connect to host
lines = stream.socketTextStream('local host', 4040)

#Skipping even numbered lines
if int linenumber % 2 == 0:
   words = lines.flatMap(lambda line: line.split(' ')) #Splitting lines into words
   
# Displaying words
words.pprint()

# Printing words that have more than five characters
words_df = words
characters = words.flatMap(lambda words: words.split(' '))
print('words with more than five characters ')
words_df.filter('characters > 5').show()

# Counting digits
count = sum(c.isdigit() for c in words)

# Defining output sink and output mode
writer = words_df.writeStream.format("console").outputMode("complete")


# Stream commands
stream.start()
stream.awaitTermination()