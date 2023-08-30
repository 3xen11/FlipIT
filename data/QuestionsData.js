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
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Do czego służy React Query?',
    answer: 'ReactQuery służy do fetchowania danych w aplikacjach Reacta',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Dlaczego React Query?',
    answer:
      'React jest bibliotetką UI i nie posiada wzorca do fetchowania danych, ReactQuery ułatwia ten proces',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Co zastępuje React Query w Reactcie do fetchowania danych?',
    answer:
      'ReactQuery zastępuje useEffect i useState, do utrzymywania stanów komponentów jak ładowanie, błędy i wynik pobierania danych',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question:
      'Jakie są pierwsze trzy parametry przekazywane do hooka useQuery?',
    answer:
      'Pierwszym parametrem jeste queryKey, drguim funkcja fetchująca, trzecim obiekt z ustawieniami',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question:
      'Czy ReactQuery pomaga w zarządzaniu asynchronicznością i stanami serwera?',
    answer:
      'Tak, ReactQuery ułatwia pracę z asynchronicznością i stanami serwera bardziej niż biblioteki do zarządzania stanami',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jakie są różnice między stanami klienta a serwera?',
    answer: `
    Stany klienta:
- przechowywane w pamięci aplikacji, a dostęp do nich lub ich aktualizacja jest synchroniczna
Stany serwera:
- utrzymywane zdalnie, wymagają asynchronicznych interfejsów API do pobierania lub aktualizowania
- posiada współwłasność
- dane mogą buć aktualizowane przez kogoś innego bez twojej wiedzy
- dane UI mogą nie być zsynchronizowane ze zdalnymi danymi
- jest wyzwaniem gdy trzeba radzić sobie z buforowaniem, deduplikacją wielu żądań dla tych samych danych, aktualizacją nieaktualnych danych w tle, optymalizacją wydajności itp.
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jak dodajemy możliwość używania ReactQuery w projekcie?',
    answer: `
    - importujemy QueryClientProvider i QueryClient z react-query
- owijamy komponent <App> komponentem <QueryClientProvider>
- tworzymy instancje QueryLinet - const queryClient = new QueryClinet()
- w komponencie <QueryClientProvider> dodajemy props client={queryClient}
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest queryKey w ReactQuery?',
    answer:
      'W React Query, queryKey to parametr używany w hookach i funkcjach, które pozwalają na odwoływanie się do konkretnego zapytania. queryKey jest tablicą zawierającą informacje potrzebne do zidentyfikowania danego zapytania w pamięci podręcznej (cache) React Query.',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Z czego składa się queryKey?',
    answer: `
    Zwykle tablica queryKey składa się z dwóch elementów:
- Klucz identyfikujący zasób lub endpoint: To może być np. nazwa endpointu API, np. "users" lub "posts"
- Zmienne identyfikujące zapytanie: To są wartości lub zmienne, które różnicują zapytania do tego samego endpointu na podstawie jakichś kryteriów. 
Na przykład, jeśli masz zapytanie o szczegóły użytkownika o konkretnym ID, to ID tego użytkownika mogłoby być częścią queryKey.
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question:
      'Jak dostać się do danych pobranych z serwera za pomocą useQuery?',
    answer: `
    Żeby dostać się do danych pobranych za pomocą useQuery, najlepiej jest go zdestrukturyzować.
const {isLoading, isError, error,  data} = useQuery('nazwa_klucza', () => { return axios.get('adres-http') }
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jak włączyć ReactQuery devtools?',
    answer: `
    - Musimy zaimportować ReactQueryDevtools z ract-query/devtools
- Przed tagiem zamykającym komponent <QueryClientProvider> dodajemy komponent <ReactQueryDevtools/>
- Do dodanego komponentu dodajemy props initialIsOpen={true}
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest queryCache?',
    answer: `w React Query to globalna pamięć podręczna (cache), która przechowuje wyniki zapytań sieciowych, lokalne stany oraz metadane związane z tymi zapytaniami. 
Jest to ważna część biblioteki React Query, ponieważ umożliwia przechowywanie danych na poziomie aplikacji i zarządzanie nimi w sposób zoptymalizowany.`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Na czym polega przechowywanie wyników zapytań w queryCache?',
    answer: `queryCache gromadzi dane zwracane przez zapytania sieciowe w pamięci podręcznej. Dzięki temu, gdy aplikacja potrzebuje tych samych danych w przyszłości, nie musi ponownie wykonywać zapytania do serwera
Można odwołać się do przechowywanych danych za pomocą queryKey`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Na czym polega automatyczne odświeżanie w queryCache?',
    answer:
      'React Query automatycznie obsługuje odświeżanie danych w tle. Możesz ustawić czas ważności (ttl) dla danych w pamięci podręcznej, po którym zostaną automatycznie odświeżone przy kolejnym użyciu',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question:
      'Czy za pomocą React Query można ustawić wartość inicjującą dla podstrony o konkretnym ID?',
    answer: `
    Tak, useQuery jako 3 parametr może przyjąć w obiekcie ustawień "initialData" do którego trzeba przekazać instancję useQueryClient() z metodą getQueryData która jako parametr przyjmuje queryKey.
Następnie do data, przypisujemy to co zwróciła nam instancja queryClient w połączeniu z getQueryData`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Na czym polega zarządzanie lokalnym stanem w queryCache?',
    answer:
      'queryCache umożliwia również przechowywanie i zarządzanie lokalnym stanem, który jest niezależny od komponentów React. Możesz używać lokalnego stanu w celu przechowywania np. flag aktywacji lub stanów interakcji, które nie są związane bezpośrednio z danymi sieciowymi',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Na czym polega usuwanie i aktualizacja danych w queryCache?',
    answer:
      'Możesz usuwać konkretne dane z pamięci podręcznej lub ręcznie wywoływać zapytania w celu aktualizacji danych w tle',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest staleTime?',
    answer: `
    - staleTime to opcjonalny parametr useQuery, który wpływa na to, jak długo dane w pamięci podręcznej są uważane za "przestarzałe" (stale)
- Po upływie tego czasu, nawet jeśli dane są przestarzałe, React Query nadal zwróci te dane, zanim zostanie wywołane nowe zapytanie do serwera w celu ich odświeżenia
- W praktyce, staleTime pozwala na wyświetlanie przestarzałych danych przez pewien okres czasu, zanim użytkownik zobaczy nowe dane po wykonaniu nowego zapytania do serwera
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest cacheTime?',
    answer: `
    - cacheTime to opcjonalny parametr useQuery, który określa, jak długo dane z zapytania powinny pozostać w pamięci podręcznej (cache)
- Po upływie tego czasu, React Query może próbować automatycznie odświeżyć dane, ale tylko jeśli komponent korzystający z tych danych jest aktywny (zamontowany)
- Jeśli cacheTime nie jest ustawione, domyślnie dane w pamięci podręcznej pozostaną tak długo, jak długo zostaną użyte w komponencie
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest refetchOnMount?',
    answer: `
    refetchOnMount to opcjonalny parametr używany w hooku useQuery biblioteki React Query
Ten parametr pozwala kontrolować, czy dane będą automatycznie odświeżane, gdy komponent, który używa tych danych, zostanie zamontowany (renderowany) na stronie
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest refetchOnWindowFocus?',
    answer: `refetchOnWindowFocus to opcjonalny parametr używany w hooku useQuery biblioteki React Query.
Parametr ten pozwala kontrolować, czy dane będą automatycznie odświeżane, gdy okno przeglądarki otrzyma focus, czyli stanie się aktywne`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest polling?',
    answer: `
    W React Query, polling to mechanizm wbudowany w bibliotekę, który umożliwia automatyczne odświeżanie danych w regularnych odstępach czasu
Jest to narzędzie zaprojektowane do łatwego i efektywnego realizowania operacji pollingu bez konieczności pisania dodatkowego kodu
Dzięki temu, możesz automatycznie odpytywać serwer o najnowsze dane w określonych interwałach czasu`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jak użyć pollingu?',
    answer:
      'Aby użyć pollingu w React Query, wystarczy dodać opcję refetchInterval do hooka useQuery lub useMutation, w zależności od tego, czy chcesz odświeżać dane czy wykonywać mutacje w regularnych odstępach czasu',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest refetchIntervalInBackground?',
    answer:
      'refetchIntervalInBackground pozwala na automatyczne odświeżanie danych, nawet w momencie kiedy przeglądarka nie wskazuje na zamontowany komponent',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jak wywołać useQuery po kliknięciu w przycisk?',
    answer: `Żeby wywołać useQuery po kliknięciu w przycisk wystarczy zdestrukturyzować 'refetch' z useQuery i dodać je np. w buttonie 'onClick={refetch}'`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question:
      'Jak w React Query wykonujemy zapytania rownoległe (Parallel Queries)?',
    answer:
      'Aby wykonać zapytanie równoległe w React Query wystarczy użyć useQuery() tyle razy ile musimy pobrać dane',
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Do czego służy useQueries w React Query?',
    answer: `
    Głównym celem useQueries jest umożliwienie efektywnego pobierania danych z różnych źródeł lub endpointów API w jednym komponencie, przy minimalnym wpływie na wydajność. 
Pozwala to na równoczesne pobieranie wielu zestawów danych, bez blokowania interfejsu użytkownika i niepotrzebnie powtarzania zapytań, które są niezależne od siebie.

    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest useQueryClient w React Query?',
    answer: `
    useQueryClient to hook dostarczany przez bibliotekę React Query, który umożliwia dostęp do instancji QueryClient. 
QueryClient jest centralnym punktem kontroli w React Query, przechowującym informacje o zapytaniach, danych cache'owanych oraz funkcjonalności związanych z zarządzaniem stanem zapytań.
    `,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'W jakich celach używa się useQueryClient?',
    answer: `- Wywoływanie ręcznych odświeżeń zapytań: Możesz użyć queryClient do ręcznego wywołania odświeżenia konkretnego zapytania, np. w reakcji na akcje użytkownika.
- Dodawanie nowych danych do cache'a: QueryClient pozwala na manualne dodawanie danych do cache'a, co może być przydatne, gdy masz dane uzyskane z innych źródeł lub manipulujesz nimi w pewien sposób.
- Usuwanie danych z cache'a: Możesz również usunąć konkretne dane z cache'a przy użyciu queryClient.
- Dostęp do globalnych ustawień: QueryClient przechowuje również globalne ustawienia dla zapytań, takie jak maksymalny czas ważności danych w cache'u.
- Zarządzanie stanem zapytań: Przy użyciu queryClient możesz manipulować stanem zapytań, np. zatrzymać lub wznowić wykonywanie zapytań.`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Do czego służy useInfinityQuery?',
    answer: `useInfiniteQuery pozwala na łatwe zarządzanie danymi stronicowanymi w przypadku, gdy każda strona danych może być również opakowana w dodatkowych informacjach, takich jak tokeny paginacyjne itp. Ten hook pomaga w automatyzacji procesu ładowania kolejnych stron danych w odpowiedzi na akcje użytkownika, takie jak przewijanie`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest mutacja w React Query?',
    answer: `W bibliotece React Query, mutacje służą do wykonywania operacji zmiany na serwerze, takich jak dodawanie, aktualizowanie lub usuwanie danych. Mutacje umożliwiają interakcję z API w celu wprowadzenia zmian w danych i równocześnie automatycznie aktualizują stan lokalny w React Query na podstawie odpowiedzi z serwera.`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jakie są podstawowe cechy mutacji w React Query?',
    answer: `- Automatyczna synchronizacja stanu: Po wykonaniu mutacji i otrzymaniu odpowiedzi z serwera, React Query automatycznie aktualizuje dane w swoim lokalnym stanie. To oznacza, że nie musisz samodzielnie aktualizować widoku po zakończeniu mutacji.
- Obsługa optymistyczna: React Query obsługuje optymistyczną aktualizację stanu, co oznacza, że możesz natychmiast zaktualizować interfejs użytkownika po uruchomieniu mutacji, nawet przed otrzymaniem potwierdzenia od serwera. W przypadku, gdy mutacja się nie powiedzie, React Query cofnie zmiany.
- Zarządzanie stanem mutacji: React Query dostarcza informacje na temat stanu mutacji, takie jak czy mutacja jest w trakcie wykonywania, czy się powiodła, czy wystąpił błąd itp. Możesz korzystać z tych informacji, aby dostosować interfejs użytkownika.
- Caching: Podobnie jak w przypadku zapytań pobierających dane, React Query również przechowuje w pamięci wynik mutacji, co pozwala na korzystanie z tych danych w innych częściach aplikacji.`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest Query Invalidation w React Query?',
    answer: `Query Invalidation to pojęcie związane z biblioteką React Query, która jest narzędziem do zarządzania stanem zapytań do API, buforowania danych i automatycznego odświeżania ich w interfejsie użytkownika.
Głównym celem React Query jest zapewnienie sprawnego zarządzania danymi pobieranymi z serwera poprzez zapytania (queries) oraz danych wysyłanych na serwer poprzez mutacje (mutations), przy minimalnej ilości zbędnego kodu i zapewnieniu dobrej wydajności.
`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Do czego odnosi się Query Invalidation?',
    answer: `Query Invalidation odnosi się do procesu, w którym możesz wywołać "nieważne" (invalidate) dane w pamięci podręcznej React Query. To oznacza, że możesz ręcznie spowodować, że dany zestaw danych jest przestarzały i wymaga ponownego pobrania od serwera. Możesz to zrobić, na przykład, gdy wiesz, że dane zostały zmienione poza aplikacją i chcesz upewnić się, że twoja aplikacja ma zawsze aktualne dane.`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Jakie są typowe przypadki użycia Query Invalidation?',
    answer: `-Po zakończeniu mutacji: Po wykonaniu mutacji, która zmienia dane na serwerze, możesz zainwalidować powiązane z tą mutacją zapytania, aby spowodować ponowne pobranie i odświeżenie tych danych.
-Planowane odświeżanie: Możesz zainwalidować dane w określonych interwałach czasu, aby zapewnić, że twoje dane zawsze są aktualne.
-Zewnętrzne zmiany: Jeśli wiesz, że dane zostały zmienione poprzez inne źródło (np. inne urządzenie lub użytkownik), możesz zaktualizować te dane w React Query, wywołując inwalidację.
`,
  },
  {
    id: nanoid(),
    known: false,
    tech: 'React Query',
    question: 'Czym jest Optimistic Updates w React Query?',
    answer: `W React Query, "Optimistic Updates" (optymistyczne aktualizacje) to podejście, które pozwala na płynne i natychmiastowe reakcje interfejsu użytkownika w odpowiedzi na akcje, takie jak tworzenie, aktualizowanie lub usuwanie danych, nawet zanim faktyczne żądania do serwera zostaną zakończone. Działa to na zasadzie przewidywania, że operacja na danych się powiedzie, i odzwierciedlenia tego przewidywania w interfejsie użytkownika, zanim odpowiedź od serwera zostanie odebrana.`,
  },
];
