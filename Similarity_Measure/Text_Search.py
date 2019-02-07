import re
from difflib import get_close_matches



substring = "apple"
food_list = open("test.txt","r").read().split(',')


print(get_close_matches(substring,food_list,cutoff=0.5))
