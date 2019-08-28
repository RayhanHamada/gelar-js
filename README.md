[![Build Status](https://travis-ci.org/RayhanHamada/gelar-js.svg?branch=master)](https://travis-ci.org/RayhanHamada/gelar-js)
# gelar-js
A package for saving and making your project structure in YAML file format. 
## Install

It's extremely recommended to install this package in global node_modules so u can access it globally from command line

```
npm i -g gelar-js
```

## Usage
In command line, you could type the following commands :

Initialize gelar, and creating gelar.yaml in os.homedir() for saving your project structure. use this command if you accidentally delete gelar.yaml
<br/>
```
gelar 
```

Create your project structure in current directory
<br/>
```
gelar use <your_favorite_project_structure>
```

Reset the gelar.yaml to brand new
<br/>
```
gelar clean
```

Show list of available structures
<br/>
```
gelar list
```

Type "gelar" with whatever argument to show helps

## Make your own project structure
You could make your own Project Structure, just edit the gelar.yaml file located in os.homedir()

In Windows, you could find it on %USERPROFILE%/ directory
In Linux, you could find it on HOME directory

if you just wants to use the demo structure, i already prepared a project structure named "example1", and you could just use it with "use" command.

let's make some project structure, you could make the structure like this.
<br/>
<br/>
```
my_structure:           # the name of your project structure, would not included as directory, bcause it's just a name.
  - assets: null        # make empty folder, make sure you put null to mark it as empty directory, although you could just leave it blank.
  - src:                # make a directory with file in it. Notice the indentation, because YAML use indentation to structure its data
    - index.html        # make a file, make sure to give it an extension
    - index.js
    - "my-style.css"    # if you want to put dash "-" your filename, just enclose it with double quotes
  - another_file: null  # notice the indentation, and be careful with it, so it wouldn't make any parsing error or unwanted structure

```
i choose YAML format because its structure's shape is kinda like directory tree (which i thought would be easy to write and read data in this context). and probably would add another data format in the future. :p
