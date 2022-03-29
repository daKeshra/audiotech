# import required module
import os
# assign directory
directory = 'video'

# iterate over files in
# that directory
for filename in os.listdir(directory):
	f = os.path.join(directory, filename)
	# checking if it is a file
	if os.path.isfile(f):
		print(f)
		#if f.startswith('img') and f.endswith('.jpg'):
			#e = f
			#src = "<img src='img/"
			#alt = " ' alt='Gallery image'>"
			#result = "{src}   {alt}".format(src="<img src='",  alt=" 'Gallery image'>")
			#print(f)
			#print(src + f + alt)

