**Session1 redux toolkit 의 slice 사용법 배우기**

**자동차 재고사이트 구축**

**준비 작업**

**React JS frontend만 구축**

slice 사용법 설명에 집중

github repo: **https://github.com/jisooyu/youtube-redux-toolkit**

**branch : session1**

**Create-react-app을 실행**

npx create-react-app@latest youtube-redux-toolkit

cd youtube-redux-toolkit

**라이브러리 설치**

npm i \@reduxjs/toolkit react-dom react-icons react-redux redux-thunk

**create-react-app에 대한 tailwind css 설치**

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

(참고) -p flag는 tailwind.config.js와 함께 post.config.css를 만들 때
사용

**tailwind css 설정**

tailwind.config.js

module.exports = {

content: \[

\"./src/\*\*/\*.{js,jsx,ts,tsx}\"

\],

theme: {

extend: {},

},

plugins: \[\],

}

**index.css에 tailwind directives 정의**

index.css

\@tailwind base;

\@tailwind components;

\@tailwind utilities;

**전체 구조**

**최종 output**

![Graphical user interface, application, website Description
automatically generated](media/image1.png){width="6.506344050743657in"
height="4.035087489063867in"}

**site program structure**

![Graphical user interface, application, Teams Description automatically
generated](media/image2.png){width="1.5263156167979002in"
height="3.3845877077865265in"}

**components 준비**

**src/App.js**

import Navbar from \"./components/Navbar\";

function App() {

return (

\<\>

\<Navbar /\>

\</\>

);

}

export default App;

**src/components/Navbar.js**

const Navbar = () =\> {

return (

\<div className=\'bg-orange-800 text-neutral-50 flex justify-around\'\>

\<div className=\'flex\'\>

\<h3 className=\'p-4 text-2xl\'\>Redux Toolkit\</h3\>

\</div\>

\</div\>

);

};

export default Navbar;

**왜 redux toolkit?**

-   redux는 2015년 페북의 Dan Abramov and Andrew Clark이 개발

-   redux는 사용하기가 복잡.

-   불필요한 경우에도 redux를 사용하는 문제.

-   이제는 redux toolkit으로 수렴해가는 상황.

-   처음 개발하는 react js 사이트라면 redux toolkit을 적용할 것

**언제 redux를 사용할 것인가?**

출처:
<https://bytefish.medium.com/i-tried-6-interview-questions-from-coding-interview-with-dan-abramov-6c25539dbef>

**사용할 필요가 없는 경우**

![Diagram Description automatically
generated](media/image3.png){width="5.872877296587927in"
height="2.0672265966754155in"}

![Diagram Description automatically
generated](media/image4.png){width="5.621849300087489in"
height="1.9788659230096237in"}

**사용 하는 경우**

![Diagram Description automatically generated with medium
confidence](media/image5.png){width="5.832339238845145in"
height="2.218487532808399in"}

![Diagram Description automatically
generated](media/image6.png){width="5.806722440944882in"
height="5.112104111986001in"}

**개념 정리**

dispatch\--\>action\--\>reducer\--\>change state\--\>store에 state 변화
반영됨. 기존의 redux와 동일.

은유법(metaphor)의 중요성 - 프로그래밍을 공부할 때 현실적 상황을 예를
들며 프로그래밍이 어떻게 해서 작동되는 지를 이해하는 방법.

**수강신청**

**our example**

state: 현재의 상태를 나타내는 변수/값

-   자동차 모델 관련 state - 자동차 아이디(id), 자동차모델(model),
    자동차가격(price), 자동차대수(quantity),

-   재고관련 state -- 총대수(totalQuantity), 총가치(totalValue)

-   프로그램실행 상황 관련 state: isLoading

action:

-   store에 [보내는]{.underline} action과 데이터( [payload)]{.underline}

    -   특정 자동차모델 [입고]{.underline}(increase), 특정 자동차모델
        [출고]{.underline}(decrease)

    -   입고, 출고에 관한 차량 데이터

dispatch:

-   action을 reducer로 보내는 기능. useDispatch()를 사용. 보통 UI에서
    실행됨.

reducer:

-   action에 있는 payload를 state에 반영하여 변경

-   입고(+) 시 특정 자동차 모델 대수 증가

-   출고(-) 시 특정 자동차 모델 대수 감소

-   총대수 증가/감소

-   state의 변경을 실행. 엄밀히 말하면 state의 copy를 변경.

    -   ReactJS에서는 현재 state 에 대한 직접적인 변경을 불허

    -   X state.value = 123

-   immutable 준수 - spread operator를 사용

    -   return {\...state, value: 123,}

총가치 증가/감소 실행하는 reducer function을 만들어야 함. 자바스크립트
실력이 필요.

store:

-   모든 state를 중앙관리 하는 곳

-   store에 state와 reducer를 configure.

-   action -\> dispatch to the reducer -\> reducer는 store의 state를
    변경

-   모든 하위 components에서 store에서 state를 가져오거나, 새로운
    state를 dispatch 할 수 있음.

slice:

-   action과 reducer를 정의한 function.

    -   state 초기 값

    -   슬라이스 이름

    -   reducer

-   createSlice를 사용하여 slice를 만듬. slice에는 각 reducer와 state에
    해당하는 action creator와 action type이 만들어짐.

features:

-   slice 파일을 저장하는 폴더 이름. 특성을 뜻하는 데 연역하면
    기능이라고 해야 할 것 같음.

-   예를 들면 사용자 로그인/등록을 하는 기능, 혹은 자동차 재고 관리 기능
    등이 feature에 해당.

![How to use Redux, React Redux in React JS with
Example](media/image7.png){width="6.263888888888889in"
height="3.435416666666667in"}

**source:
<https://programmingfields.com/use-redux-react-redux-in-react-js-with-example/>**

**슬라이스 만들기**

**carSlice 생성**

redux toolkit에서는 action과 reducer를 slice 라고 하는 function한곳에
정의 해 놓음. 기존의 redux와 다른 점

**intialState 데이터 생성**

**src/carData.js**

const carData = \[

{

id: \"rec1JZlfCIBOPdcT2\",

model: \"Genesis G80\",

price: 35678.34,

img:
\"https://www.genesis.com/content/dam/genesis-p2/worldwide/assets/utility/sns/genesis-ww-model-g80-02-social-1200x630-en.jpg\",

quantity: 5,

},

{

id: \"recB6qcHPxb62YJ75\",

model: \"Genesis G90\",

price: 43034.67,

img:
\"https://hips.hearstapps.com/hmg-prod/images/2023-genesis-g90-front-three-quarters-1650907362.jpg\",

quantity: 3,

},

{

id: \"recdRxBsE14Rr2VuJ\",

model: \"Genesis GV 80\",

price: 38567.23,

img:
\"https://www.motortrend.com/uploads/sites/5/2020/03/2021-Genesis-GV80.jpg\",

quantity: 2,

},

{

id: \"recwTo160XST3PIoW\",

model: \"Genesis GV 70\",

price: 31345.87,

img:
\"https://cdn.jdpower.com/JDPA_2022%20Genesis%20GV70%20Burgundy%20Front%20Quarter%20View.jpg\",

quantity: 4,

},

\];

export default carData;

**totalQuantity action/reducer만들기**

**src/features/cars/carSlice.js**

import { createSlice } from \"@reduxjs/toolkit\";

import carData from \"../../carData\";

const initialState = {

carModels: carData,

totalQuantity: 0,

totalValue: 0,

isLoading: true,

};

const carSlice = createSlice({

name: \"cars\",

initialState,

reducers: {

calculateTotals: (state) =\> {

let totalQuantity = 0;

let totalValue = 0;

state.carModels.forEach((model) =\> {

totalQuantity += model.quantity;

totalValue += model.quantity \* model.price;

});

state.totalQuantity = totalQuantity;

state.totalValue = totalValue;

},

},

});

export const { calculateTotals } = carSlice.actions;

export default carSlice.reducer;

**store만들기**

**src/store.js**

import { configureStore } from \"@reduxjs/toolkit\";

import carReducer from \"./features/cars/carSlice\";

export const store = configureStore({

reducer: {

cars: carReducer,

},

});

**provider와 store를 index.js에 추가**

provider는 하위 components가 store에 접근할 수 있도록 하는 기능

**src/index.js**

import React from \"react\";

import ReactDOM from \"react-dom/client\";

import { Provider } from \"react-redux\";

import { store } from \"./store\";

import \"./index.css\";

import App from \"./App\";

import reportWebVitals from \"./reportWebVitals\";

const root = ReactDOM.createRoot(document.getElementById(\"root\"));

root.render(

\<React.StrictMode\>

\<Provider store={store}\>

\<App /\>

\</Provider\>

\</React.StrictMode\>

);

reportWebVitals();

**FaCarAlt 아이콘 옆에 자동차 대수 표기**

**src/App.js**

import { useEffect } from \"react\";

import { useSelector, useDispatch } from \"react-redux\";

import Navbar from \"./components/Navbar\";

import { calculateTotals } from \"./features/cars/carSlice\";

function App() {

const { carModels } = useSelector((state) =\> state.cars);

const dispatch = useDispatch();

useEffect(() =\> {

dispatch(calculateTotals());

}, \[carModels\]);

return (

\<\>

\<Navbar /\>

\</\>

);

}

export default App;

**Font Awesome icons 사용하기**

<https://react-icons.github.io/react-icons/icons?name=fa>

![A picture containing tool, wrench Description automatically
generated](media/image8.png){width="1.3472222222222223in"
height="0.7777777777777778in"}

**src/components/Navbar.js**

import { FaCarAlt } from \"react-icons/fa\";

import { useSelector } from \"react-redux\";

const Navbar = () =\> {

const { totalQuantity } = useSelector((state) =\> state.cars);

return (

\<div className=\'bg-orange-800 text-neutral-50 flex justify-around\'\>

\<div className=\'flex\'\>

\<h3 className=\'p-4 text-2xl\'\>Redux Toolkit\</h3\>

\</div\>

\<div className=\'p-4 text-3xl flex\'\>

\<FaCarAlt /\>

\<p className=\'ml-4 text-2xl\'\>{totalQuantity}\</p\>

\</div\>

\</div\>

);

};

export default Navbar

**크롬에서 redux 확인하기**

![Graphical user interface, text, application Description automatically
generated](media/image9.png){width="5.710527121609799in"
height="3.2895680227471567in"}

**Car 데이터를 display 하는 components 추가**

**App.js에 Cars.js를 import 한 후(전)에 다음을 완성**

**src/components/Cars.js**

import React from \"react\";

import { useSelector } from \"react-redux\";

const Cars = () =\> {

const { totalValue } = useSelector((state) =\> state.cars);

return (

\<section\>

\<header\>

\<h2 className=\'text-center font-extrabold text-2xl p-10\'\>

Available Models

\</h2\>

\</header\>

\<footer className=\'text-center font-extrabold text-xl p-10\'\>

\<h4\>

Total Value \<span\>\${totalValue.toFixed(0)}\</span\>{\" \"}

\</h4\>

\</footer\>

\</section \>

);

};

export default Cars;

**increase, decrease 만들기**

**src/features/cars/carSlice.js**

import { createSlice } from \"@reduxjs/toolkit\";

import carData from \"../../carData\";

const initialState = {

carModels: carData,

totalQuantity: 0,

totalValue: 0,

isLoading: true,

};

const carSlice = createSlice({

name: \"cars\",

initialState,

reducers: {

increase: (state, { payload }) =\> {

const carModel = state.carModels.find((model) =\> model.id ===
payload.id);

carModel.quantity = carModel.quantity + 1;

},

decrease: (state, { payload }) =\> {

const carModel = state.carModels.find((model) =\> model.id ===
payload.id);

carModel.quantity = carModel.quantity - 1;

},

calculateTotals: (state) =\> {

let totalQuantity = 0;

let totalValue = 0;

state.carModels.forEach((model) =\> {

totalQuantity += model.quantity;

totalValue += model.quantity \* model.price;

});

state.totalQuantity = totalQuantity;

state.totalValue = totalValue;

},

});

export const { increase, decrease, calculateTotals } = carSlice.actions;

export default carSlice.reducer;

**carData의 carModels를 CarDetail.js로 보냄**

**src/components/Cars.js**

import CarModel from \"./CarDetail\";

const { carModels, totalValue } = useSelector((state) =\> state.cars);

\<main\>

{carModels.map((car) =\> {

return \<CarModel key={car.id} {\...car} /\>;

})}

\</main\>

**CarDetail.js 만들기**

import React from \"react\";

import { increase, decrease } from \"../features/cars/carSlice\";

import { useDispatch } from \"react-redux\";

import { FaArrowUp, FaArrowDown } from \"react-icons/fa\";

const CarDetail = ({ id, model, price, img, quantity }) =\> {

const dispatch = useDispatch();

return (

\<div className=\'grid grid-cols-3 gap-4 justify-items-center \'\>

\<div className=\'m-3\'\>

\<h3 className=\'pr-3\'\>{\`car model: \${model}\`}\</h3\>

\</div\>

\<img className=\'object-cover h-48 w-96\' src={img} alt=\'N.A.\' /\>

\<div\>

\<button onClick={() =\> dispatch(increase({ id }))}\>

\<FaArrowUp /\>

\</button\>

\<p className=\'p-3\'\>inventory: {quantity}\</p\>

\<button onClick={() =\> dispatch(decrease({ id }))}\>

\<FaArrowDown /\>

\</button\>

\</div\>

\</div\>

);

};

export default CarDetail;

**reducers에 clearModels와 removeModel추가**

**src/features/cars/carSlice.js**

clearModels: (state) =\> {

state.carModels = \[\];

},

removeModel: (state, {payload}) =\> {

state.carModels = state.carModels.filter(

(model) =\> model.id !== payload.id

);

},

export const { clearModels, removeModel, increase, decrease,
calculateTotals } =

carSlice.actions;

**Cars.js에 clearModels추가**

**src/components/Cars.js**

import { useSelector, useDispatch } from \"react-redux\";

import { clearModels } from \"../features/cars/carSlice\";

const dispatch = useDispatch();

\<button

className=\'rounded-lg border-2 border-orange-800 text-xl font-normal
w-15 mt-5 p-4\'

onClick={() =\> dispatch(clearModels())}\>

Clear Warehose

\</button\>

**CarDetail.js에 removeModel 추가 하기**

**src/components/CarDetail.js**

import React from \"react\";

import { increase, decrease, removeModel } from
\"../features/cars/carSlice\";

import { useDispatch } from \"react-redux\";

import { FaArrowUp, FaArrowDown, FaTrashAlt } from \"react-icons/fa\";

const CarDetail = ({ id, model, price, img, quantity }) =\> {

const dispatch = useDispatch();

return (

\<div className=\'grid grid-cols-3 gap-4 justify-items-center\'\>

\<div className=\'m-3\'\>

\<h3 className=\'pr-3\'\>{\`car model: \${model}\`}\</h3\>

\<button className=\'pl-12\' onClick={() =\> dispatch(removeModel({ id
}))}\>

\<FaTrashAlt /\>

\</button\>

\</div\>

\<img className=\'object-cover h-48 w-96\' src={img} alt=\'N.A.\' /\>

\<div\>

\<button onClick={() =\> dispatch(increase({ id }))}\>

\<FaArrowUp /\>

\</button\>

\<p className=\'p-3\'\>inventory: {quantity}\</p\>

\<button onClick={() =\> dispatch(decrease({ id }))}\>

\<FaArrowDown /\>

\</button\>

\</div\>

\</div\>

);

};

export default CarDetail;
