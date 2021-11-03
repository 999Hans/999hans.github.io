(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{390:function(t,i,s){"use strict";s.r(i);var a=s(42),e=Object(a.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_210107"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_210107"}},[t._v("#")]),t._v(" 210107")]),t._v(" "),s("h3",{attrs:{id:"statistics-통계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statistics-통계"}},[t._v("#")]),t._v(" Statistics, 통계")]),t._v(" "),s("h3",{attrs:{id:"density-estimation-밀도-추정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#density-estimation-밀도-추정"}},[t._v("#")]),t._v(" Density Estimation, 밀도 추정")]),t._v(" "),s("ul",[s("li",[t._v("기본 개념\n"),s("ul",[s("li",[t._v("관측된 데이터를 통해 그 변수가 가지는 특성을 파악하려고 한다")]),t._v(" "),s("li",[t._v("하지만 하나의 데이터는 변수의 일면에 불과하기 때문에 변수의 진면목을 파악하기 위해서는 많은 수의 데이터가 필요")]),t._v(" "),s("li",[t._v("관측된 데이터들의 분포로부터 원래 변수의 (확률) 분포 ㅌ특성을 추정하고자 하는 것이 Density Estimation(밀도 추정)이다")]),t._v(" "),s("li",[t._v("예를 들어 '일일 교통량'을 추정하고자 할 때 매일 관측되는 하나 하나의 값으로는 전체의 특성을 알 수 없다. 하지만 매일 측정한 데이터를 모아 큰 데이터로 '일일 교통량' 이라는 변수가 가질 수 있는 값 및 그 값을 가질 가능성을 정도를 추정하는 것이 밀도 추정이다.")]),t._v(" "),s("li",[t._v("확률, 통계 등에서 말하는 밀도는 확률 밀도(Probability Density)인데 여기서 확률을 빼고 밀도라고 부른다")]),t._v(" "),s("li",[t._v("확률 분포에서 x = a일 확률은 0이지만, f(a) ≠ 0 이다.")])])]),t._v(" "),s("li",[t._v("Parametric vs Non-parametric 밀도 추정\n"),s("ul",[s("li",[t._v("parametric -  미리 모델을 정해놓고 데이터들로부터 모델의 파라미터를 추정\n"),s("ul",[s("li",[t._v("정규 분포를 따른 다고 가정하고 추정하는 것")])])]),t._v(" "),s("li",[t._v("Non-parametric - 어떠한 사전 정보나 지식 없이 순수하게 관측된 데이터만으로 확률 밀도 함수를 추정하는 것\n"),s("ul",[s("li",[t._v("가장 간단한 형태가 Histogram(히스토그램)이다")]),t._v(" "),s("li",[t._v("이 히스토그램을 정규화하여 밀도 함수로 사용하여 추정하는 것")])])])])])]),t._v(" "),s("h3",{attrs:{id:"kernel-density-estimation-커널-밀도-추정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kernel-density-estimation-커널-밀도-추정"}},[t._v("#")]),t._v(" Kernel Density Estimation, 커널 밀도 추정")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("히스토그램은 bin의 경계에서 불연속성이 나타난다는 점, bin의 크기 및 시작 위치에 따라 히스토그램이 달라진다는 점, 고차원(high dimension) 데이터에는 메모리 문제 등으로 사용하기 힘들다는 점 등의 문제 점이 있음")])]),t._v(" "),s("li",[s("p",[t._v("이러한 문제점을 해결한 것이 Kernel Density Estimation")])]),t._v(" "),s("li",[s("p",[t._v("Kernel Function의 정의")]),t._v(" "),s("ul",[s("li",[t._v("수학적으로 커널 함수는 원점을 중심으로 한 대칭이면서 적분값이 1인 non-negative 함수로 정의되며 가우시안(Gaussian), Epanechnikov, uniform 함수 등이 대표적인 커널 함수임")])])]),t._v(" "),s("li",[s("p",[t._v("히스토 그램을 Kernel Function으로 만들기 위한 방법은")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("각 관측된 데이터 각각마다 해당 데이터 값을 중심으로 하는 커널 함수를 생성한다")])]),t._v(" "),s("li",[s("p",[t._v("이렇게 만들어진 커널 함수들을 모두 더한 후 전체 데이터 개수로 나눈다")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/376739f6-2ec5-4c92-bcf3-ea9019f05ead/Untitled.png",alt:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/376739f6-2ec5-4c92-bcf3-ea9019f05ead/Untitled.png"}})])])])]),t._v(" "),s("li",[s("p",[t._v("히스토그램과의 비교")]),t._v(" "),s("ul",[s("li",[t._v("히스토그램은 이산적으로 각 데이터에 대응되는 bin값을 증가시킴으로써 불연속성이 발생하는 반면 커널 밀도 추정은 smooth한 확률 밀도 함수를 얻을 수 있는 장점이 있다")])])])])])}),[],!1,null,null,null);i.default=e.exports}}]);