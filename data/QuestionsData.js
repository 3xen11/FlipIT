import { nanoid } from 'nanoid';

export default [
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Czym różnią się zmienne zadeklarowane przy użyciu "var", "let" i "const"?',
    answer:
      'Zmienne zadeklarowane przy użyciu "var" są hoistowane i mają zakres funkcji, natomiast zmienne zadeklarowane przy użyciu "let" i "const" mają blokowy zakres i nie są hoistowane. "const" tworzy zmienną stałą, której wartość nie może być zmieniona po przypisaniu, a "let" pozwala na zmianę wartości po zadeklarowaniu.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Wyjaśnij, czym są domknięcia (closures) w JavaScript i jakie mają zastosowanie?',
    answer:
      'Domknięcia to mechanizm w JavaScript, który pozwala na zachowanie dostępu do zmiennych wewnętrznych funkcji, nawet po zakończeniu działania funkcji zewnętrznej. Pozwala to na utworzenie prywatnych zmiennych oraz implementację wzorców projektowych, takich jak moduły.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question: 'Co to są obietnice (promises) w JavaScript i jak działają?',
    answer:
      'Obietnice to mechanizm asynchronicznego programowania w JavaScript, który pozwala na obsługę operacji, które zakończą się sukcesem lub niepowodzeniem w przyszłości. Obietnice mają dwa stany: "fulfilled" (spełniona) i "rejected" (odrzucona). Pozwalają na bardziej zrozumiałe i czytelne zarządzanie asynchronicznymi operacjami.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question: 'Co to jest zjawisko "hoisting" w JavaScript?',
    answer:
      'Hoisting to zachowanie w JavaScript, w którym deklaracje zmiennych i funkcji są przenoszone na górę zakresu ich działania, ale nie ich inicjalizacje. Oznacza to, że można użyć zmiennej lub funkcji przed ich deklaracją, ale wartość będzie "undefined", jeśli nie zostaną zainicjalizowane przed użyciem.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Wyjaśnij różnicę między "==" a "==="? Kiedy powinno się używać każdego z nich?',
    answer:
      '"==" to operator porównania abstrakcyjnego, który porównuje wartości, dopuszczając konwersję typów (np. 5 == "5" zwróci true). "===" to operator porównania dokładnego, który porównuje wartości oraz typy (np. 5 === "5" zwróci false). Zaleca się używanie "===" dla większej precyzji porównań.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question: 'Jak działa mechanizm "event bubbling" w przeglądarce?',
    answer:
      '"Event bubbling" to zjawisko, w którym zdarzenia wywołane na danym elemencie DOM są przekazywane do rodzica tego elementu i dalej w górę hierarchii DOM, aż do elementu dokumentu. Umożliwia to łatwiejsze obsługiwanie zdarzeń na wielu elementach i uniknięcie konieczności przypisywania handlerów na każdym poziomie hierarchii osobno.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Jak można uniknąć problemów związanych z "callback hell" w JavaScript?',
    answer:
      'Aby uniknąć "callback hell" (głębokiej zagnieżdżenia funkcji zwrotnych), można użyć obietnic (promises) lub skorzystać z async/await, które pozwala na bardziej linearny i czytelny kod w przypadku asynchronicznych operacji.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Jakie są różnice między tworzeniem elementów DOM przy użyciu "innerHTML" a "createElement"?',
    answer:
      '"innerHTML" pozwala na wprowadzenie kodu HTML i umieszczenie go w elemencie, ale może być podatne na ataki typu Cross-Site Scripting (XSS) i może nadpisywać istniejącą zawartość. "createElement" tworzy nowy element DOM programowo i jest bardziej bezpieczne, ale wymaga większego nakładu kodu.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question: 'Co to jest Event Loop w JavaScript?',
    answer:
      'Event Loop to mechanizm w JavaScript, który pozwala na obsługę asynchronicznych operacji, takich jak zdarzenia, obietnice czy funkcje czasowe. W skrócie, jest to pętla, która stale czeka na zdarzenia do obsłużenia i wykonuje kod zwrotny (callback) odpowiedzialny za przetworzenie tych zdarzeń.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'JavaScript',
    question:
      'Wyjaśnij, czym są strzałkowe funkcje (arrow functions) i w jakich sytuacjach są użyteczne?',
    answer:
      'Strzałkowe funkcje to nowa składnia dla funkcji w JavaScript wprowadzona w ECMAScript 6. Są krótsze i bardziej zwięzłe niż tradycyjne funkcje, nie mają własnego kontekstu "this", co oznacza, że automatycznie odnoszą się do kontekstu otaczającej funkcji.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Czym jest React i jakie są jego główne cechy?',
    answer:
      'React to biblioteka JavaScript do budowy interfejsów użytkownika. Główne cechy React to: komponentowa struktura, wirtualny DOM dla efektywnego renderowania, unidirectional data flow (jednokierunkowy przepływ danych), oraz możliwość tworzenia reużywalnych komponentów.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question:
      'Jakie są różnice między komponentami funkcyjnymi a klasowymi w React?',
    answer:
      'Komponenty funkcyjne to funkcje, które zwracają JSX, nie mają stanu ani cyklu życia. Komponenty klasowe są klasami, które dziedziczą po klasie "React.Component" i posiadają własny stan oraz cykl życia.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Czym jest JSX?',
    answer:
      'JSX (JavaScript XML) to rozszerzenie składni JavaScript, które pozwala na pisanie deklaratywnego kodu do tworzenia interfejsów użytkownika w React. JSX przypomina HTML, ale jest kompilowany do zwykłego JavaScriptu przez Babel.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Co to jest stan (state) w React i jak go używać?',
    answer:
      'Stan (state) w React to obiekt, który przechowuje dane, które mogą być zmieniane w czasie działania komponentu. Możemy go użyć w komponentach klasowych za pomocą "this.state" oraz w komponentach funkcyjnych za pomocą "useState" z hooka React.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question:
      'Co to są komponenty kontrolowane (controlled components) i niekontrolowane (uncontrolled components) w React?',
    answer:
      'Komponenty kontrolowane to takie, których wartość jest kontrolowana przez stan React. Z kolei komponenty niekontrolowane to takie, których wartość jest zarządzana przez DOM, a nie stan React.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Jakie są cykle życia (lifecycle) komponentu klasowego w React?',
    answer:
      'Komponenty klasowe w React mają różne metody cyklu życia, takie jak: componentDidMount, componentDidUpdate, componentWillUnmount, etc. Pozwalają one na wykonywanie akcji na różnych etapach istnienia komponentu.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question:
      'Co to są hooki (hooks) w React i jakie są najczęściej używane hooki?',
    answer:
      'Hooki to funkcje, które pozwalają na korzystanie ze stanu i innych funkcji React w komponentach funkcyjnych. Najczęściej używane hooki to: useState, useEffect, useContext, useCallback, oraz useMemo.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Czym jest React Router i jak go używać?',
    answer:
      'React Router to biblioteka do obsługi routingu w aplikacjach React. Pozwala na nawigację między różnymi widokami bez przeładowywania strony. Do jego użycia należy zainstalować bibliotekę i zdefiniować ścieżki (Route) oraz komponenty, które mają być renderowane dla danych ścieżek.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Jakie są zalety użycia Redux w połączeniu z React?',
    answer:
      'Redux to biblioteka do zarządzania stanem aplikacji. Główne zalety użycia Redux w połączeniu z React to: jednolity stan aplikacji, łatwiejsze zarządzanie stanem, ułatwia testowanie komponentów, oraz współdzielenie stanu między różnymi komponentami.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React',
    question: 'Co to są styled-components w React?',
    answer:
      'styled-components to biblioteka, która pozwala na pisanie styli dla komponentów w React za pomocą składni podobnej do CSS, ale z możliwością używania zmiennych JavaScript i dynamicznych styli. Jest to podejście oparte na CSS-in-JS, które pozwala na lepsze zarządzanie stylami i reużywalność komponentów.',
  },

  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Jakie są podstawowe typy danych w TypeScript?',
    answer:
      'Podstawowe typy danych w TypeScript to: number, string, boolean, null, undefined oraz symbol. Istnieje również typ "any", który pozwala na dynamiczne przypisanie typu, ale powinien być używany z ostrożnością.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question:
      'Jak definiować typowanie dla tablicy zawierającej liczby całkowite?',
    answer:
      'Typowanie dla tablicy zawierającej liczby całkowite można zdefiniować w TypeScript za pomocą notacji: number[]. Na przykład: let numbers: number[] = [1, 2, 3];',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Co to są interfejsy w TypeScript i jak ich używać?',
    answer:
      'Interfejsy w TypeScript pozwalają zdefiniować strukturę obiektu, która musi zostać spełniona. Są one używane do określenia typu obiektu. Można je używać do deklarowania typów parametrów funkcji, zmiennych itp.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Czym różnią się interfejsy od typów aliasów?',
    answer:
      'Interfejsy i typy aliasów w TypeScript pełnią podobną rolę, ale różnią się w kilku aspektach. Interfejsy mogą być rozszerzane, a typy aliasów nie. Typy aliasów są bardziej elastyczne i mogą reprezentować dowolny typ, nawet połączenie kilku typów, podczas gdy interfejsy służą głównie do modelowania struktury obiektu.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Co to jest "generics" w TypeScript i jak ich używać?',
    answer:
      'Generics w TypeScript pozwalają na stworzenie komponentów, funkcji lub klas, które mogą działać z różnymi typami danych, zachowując jednocześnie bezpieczeństwo typów. Używamy "<T>" jako parametru generycznego, na przykład: function reverseArray<T>(array: T[]): T[] { ... }',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question:
      'Czym różnią się zmienne zadeklarowane przy użyciu "var", "let" i "const"?',
    answer:
      'Zmienne zadeklarowane przy użyciu "var" są hoistowane i mają zakres funkcji, natomiast zmienne zadeklarowane przy użyciu "let" i "const" mają blokowy zakres i nie są hoistowane. "const" tworzy zmienną stałą, której wartość nie może być zmieniona po przypisaniu, a "let" pozwala na zmianę wartości po zadeklarowaniu.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Jak działa "nullable types" w TypeScript?',
    answer:
      'Typy nullable (możliwe do przyjęcia wartości null lub undefined) można zadeklarować za pomocą dodania znaku "?" na końcu typu. Na przykład: let name: string | null = null; Oznacza to, że zmienna "name" może przechowywać wartość typu "string" lub wartość "null".',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Co to jest "enum" w TypeScript i jak go używać?',
    answer:
      'Enumeracja (enum) w TypeScript pozwala zdefiniować zbiór nazwanych wartości liczbowych. Ułatwia to pracę z różnymi stałymi wartościami. Można go zadeklarować za pomocą słowa kluczowego "enum". Na przykład: enum Color { Red, Green, Blue };',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Jak działa "union type" w TypeScript?',
    answer:
      'Typy union pozwalają na określenie, że zmienna może mieć jeden z kilku różnych typów. Definiujemy je za pomocą znaku "|". Na przykład: let value: string | number;',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'TypeScript',
    question: 'Czym jest "type assertion" w TypeScript i kiedy go stosować?',
    answer:
      'Type assertion (również znany jako "type casting") pozwala programiście ręcznie określić typ zmiennej, jeśli TypeScript nie jest w stanie go automatycznie wywnioskować. Stosujemy go, gdy wiemy, że zmienna ma określony typ, ale TypeScript nie jest w stanie tego zweryfikować. Można użyć notacji "as" lub "<>" do wyrażenia type assertion. Na przykład: let someValue: any = "To jest wartość typu any"; let strLength: number = (someValue as string).length;',
  },
];
