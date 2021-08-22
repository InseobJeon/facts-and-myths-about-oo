# 1주차 - 질문

# Ref

[서론 ~ 2장 코드](https://albi-tech.tistory.com/6)

- 같이 공부하기로 한 Albireo3754 님이 작성해주신 글이다. chapter 1, chapter 2 를 맡으셨다.

# 내가 하고싶은 질문

- '객체는 다른 객체와 협력하기 위해 메시지를 전송하고, 메시지를 수신한 객체는 메시지를 처리하는 데 적합한 메서드를 자율적으로 선택한다' 라는 말의 의미에서, 코드레벨에서 메시지란 무엇을 의미한다고 이해하셨나요?
    - "저같은 경우, 코드레벨에서의 메시지라는 개념은 별도로 존재하지 않고, 어떤 의도를 가지고 다른 객체의 메서드 등을 호출하면, 그 메서드가 실행이된다"

    ```tsx
    class ObjectOne {
    	constructor() {}
    	
    	public sayHello(): string {
    		return 'Hello';
    	}
    }

    class ObjectTwo {
    	constructor() {}
    	
    	public sayNumber(): numer {
    		return 1;
    	}
    }

    const objOne = new ObjectOne();
    // 문자열을 반환한다는 사실만 알면 됨. 어떤 문자열이 어떻게 반환될지는 해당 메서드에게 자율적으로 맡김
    objOne.sayHello(); 
    ```

    - 이런 걸까요?
- `getter`, `setter` 를 만드시는 편인가요? 이론 상으로는 객체는 속성 및 상태(property, state)가 아니라, 객체간의 협력을 위해 행위(behavior) 기반으로 구성되어야 하기에 저렇게 getter, setter 로 property 들을 관리해주는 게 좋다는 생각이 드는데 [이에 대해 많은 사람들이 반기를 들고 있습니다.](https://www.yegor256.com/2014/09/16/getters-and-setters-are-evil.html) [코드베이스가 길어져서 디버깅할때 오히려 머리가 아프다는](https://stackoverflow.com/questions/1568091/why-use-getters-and-setters-accessors) 글도 있구요. 어떻게 하면 좋은 accessor 를 사용할 수 있을까요?
