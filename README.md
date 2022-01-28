## Google Clone
A responsive google clone made using react.js, next.js, tailwind and google custom search JSON API

Live Project : https://google-lime-six.vercel.app/

#### Screenshots

Google.com                 |  Google Clone
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/44324506/151520086-4bd108ce-4114-4c0f-8659-42d0b3d29d3a.png)  |  ![image](https://user-images.githubusercontent.com/44324506/151519984-1072d3a0-088e-4714-8035-f00100ec02ec.png)
![image](https://user-images.githubusercontent.com/44324506/151520896-eb0dfcf1-393b-4159-b1b8-bf9faef19cd7.png)  |  ![image](https://user-images.githubusercontent.com/44324506/151520055-271238f5-b108-44bb-9377-d37748fee36a.png)
![image](https://user-images.githubusercontent.com/44324506/151521920-1de5d622-9a7f-43f1-b3c7-fc603267697f.png)  |  ![image](https://user-images.githubusercontent.com/44324506/151520998-4bd35023-d1c1-4a35-846d-e77a3d0f85db.png)
![image](https://user-images.githubusercontent.com/44324506/151521167-98019713-4e15-43ec-bb51-3f1edb7792d4.png)  |  ![image](https://user-images.githubusercontent.com/44324506/151521124-0b0cd316-9203-48bf-a6dc-182095231682.png)
![image](https://user-images.githubusercontent.com/44324506/151521520-a2eb1324-67bf-477f-8b1d-544e8d7adb14.png)  |  ![image](https://user-images.githubusercontent.com/44324506/151521260-bbb71da0-e7af-4f15-88a5-0ffc52816563.png)

#### Installation and Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Clone the application

```
git clone https://github.com/lakshitarora14/google-clone.git
```
2. Then install the dependencies

```
npm install or yarn 
```
3. Create a local environment file by creating a file as .env.local and have these inside as keys

```
API_KEY = xxxxxxxxxxxxx_xxxxxx
CONTEXT_KEY = xxxxxxxxxxx
DUMMY_SEARCH = false
```
note: Dummy search is a switch created for testing purposes since we only get 100 searches a day, we can enable DUMMY_SEARCH to true and it will serve us a dummy response without contacting API. So this way we can test the application without exhausting our daily limit.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
