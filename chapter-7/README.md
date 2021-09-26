# 7장

# Three Perspectives in Object Oriented Programming

## Conceptual Perspective

- domain 안에 존재하는 개념과, domain 안에 존재하는 또 다른 개념들과의 관계를 표현
- 사용자가 domain 을 바라보는 관점을 반영

## Specification Perspective

- 객체가 협력을 위해 '무엇' 을 할 수 있을까에 초점을 맞춤 → interface 에 대한 고민

## Implementation Perspective

- 책임을 부여받은 객체들이 협력을 위해 책임을 다하기 위한 방법을 바라보는 관점

---

## Caution

- 이 세 가지 관점 (Conceptual, Specification, Implementation) 은 순차적인 관점이 아니다.
- 객체(혹은 객체를 표현하는 수단인 `Class`) 를 바라보는 독립적인, 다른 시각이다.
  - `conceptual` 한 관점으로 객체를 바라보자면, 이 객체가 어떤 걸 은유하고 있는지를 생각해볼 수 있다.
  - `specification` 한 관점으로 객체를 바라보자면, 이 객체가 어떤 책임을 지고 있는지를 생각해볼 수 있다.
  - `implementation` 한 관점으로 객체를 바라보자면, 이 객체가 책임을 어떤 식으로 수행하는지를 생각해볼 수 있다.

# Example: Coffee Shop

## 1단계: Domain Modeling & Use Case Extracting

### Domain Modeling

- 커피를 주문하고, 주문된 커피가 만들어져 나오는 커피가게라는 현실을 생각해보자
- 그리고 이 커피가게를 협력이라는 맥락을 근간으로 하여, 어떤 객체들이 상호작용하는지 은유하여 재생성해보자
- Domain Model from Coffee Shop
  - 바리스타
  - 주문
  - 메뉴판
  - 커피
- 물론, 다른 방식으로 도출할 수 있겠다만, 일단은 이렇게 구성할 수 있을 듯 하다.
  - 책의 예제에서는 커피를 주문하는 손님이 Domain Model 에 포함되었으나, 나는 손님을 primary actor 로 간주하고, 그 primary actor 가 '커피를 주문하면 커피가 나오는' System image 를 구성해보고자 손님을 배제하였다.

### Use Case Extracting

- 이제 이 커피숍 시스템을 사용하는 손님의 use case 를 고려해보자.
- Use Case
  - Name: 커피를 주문하여, 주문한 커피를 받는다.
  - Primary Actor: 커피시스템의 손님
  - Success Scenario
    - 손님이 메뉴판에 담겨있는 메뉴들의 목록을 요청한다
    - 메뉴판은 손님에게 메뉴들이 담겨있는 메뉴판을 반환한다
    - 손님은 메뉴판에 있던 메뉴를 골라 바리스타에게 주문한다
    - 바리스타는 커피를 만들어 손님에게 제공한다
  - extends
    - 커피를 한 번에 여러 잔 시킬 수 있다
    - 커피에 '물을 조금 넣어주세요', '설탕을 많이 넣어주세요', '얼음을 많이 넣어주세요' 등의 옵션이 가능하다

## 2단계: Class Diagram 을 통한 Domain Model 요소들간의 관계 정의

![0](/chapter-7/0.png))

## 3단계: Use Case 로부터 발생할 수 있는 Message 들의 정의

![1](/chapter-7/1.png)
