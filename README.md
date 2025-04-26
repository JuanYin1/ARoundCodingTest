# SWE INTERVIEW TEST 
## conda VM:  create a VM for the project

```bash
conda create -n around nodejs=20
```

## install dependencies for both frontend and backend
```bash
cd /pathtobackend
npm install

cd /pathtofrontend
npm install
```

### (optional) add Nodemon to the package

```json
"scrips": {
	...
	"dev": "nodemon index.js"
}
```

I that case, we do not necessarily need to terminate the server when making changes to code. Nodemon automatically restarts the server whenever it detects file changes.

output:

```bash
[nodemon] 3.1.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server is running on port 3000
```


## 1. run backend
```bash
node index.js
```

## 2. run frontend 
```bash
npm start
```

## 3. check the website and delete



