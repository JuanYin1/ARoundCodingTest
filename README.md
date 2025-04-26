# Run code
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

## 3. check the website :)

# Test
### test get function from postman and console
<img width="902" alt="截屏2025-04-25 下午2 09 30" src="https://github.com/user-attachments/assets/2e3e43f9-28d8-4154-9c25-a1d4c80fd2c9" />
<img width="551" alt="截屏2025-04-25 下午2 09 16" src="https://github.com/user-attachments/assets/43fdd659-024f-48b1-9d0d-9cf3dc9a6e30" />


### test delete function from postman and console
<img width="1566" alt="截屏2025-04-25 下午2 30 18" src="https://github.com/user-attachments/assets/0e04a17f-43ba-4328-911a-8eeb24905d3f" />
<img width="372" alt="截屏2025-04-25 下午2 30 10" src="https://github.com/user-attachments/assets/2202f946-4ada-4387-9d23-ff1717cfce0f" />








