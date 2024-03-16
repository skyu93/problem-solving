import { VNode } from 'vue';

declare global {
  namespace JSX {
    // Vue 컴포넌트의 props와 이벤트를 명시적으로 정의합니다.
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any; // HTML 요소의 타입을 any로 지정합니다.
    }
  }
}
