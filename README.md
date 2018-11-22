# GenreHunt

##################
##   To Start   ##
##################

Quick Start

1. open terminal/cmd and cd to the root of this repo
2. run 'npm install'
3. run 'npm run dev' to begin the webpack hotloader
4. enjoy

#################
##   further   ##
##    notes    ##
#################

'npm run dev:test' - this just runs the tests. tests are defined in "./src/__tests__/App.spec.js" and are written using Jest 
'npm run dev:lint' - this runs a lint check across all files. lint tests are defined in ./.eslintrc.js. to exempt a line of code from linting use /* eslint-disable-next-line */ on the line above it
'npm run dev:lint:fix' - this runs an auto fix where it can to fix code errors. not always best practice but its handy when you're doing quick fixes
'npm run dev:compile' - just compiles the code straight up without running the tests or lints