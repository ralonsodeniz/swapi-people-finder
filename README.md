# SWAPI PEOPLE FINDER

## Info

This app has been developed using [Reactjs](https://es.reactjs.org/) as JavaScript framework and it uses modern JS from ES6 and on. In regards React ecosystem it uses [React Redux](https://react-redux.js.org/) as single source of truth and global state management. For asynchronous actions the app uses [Redux Thunk](https://github.com/reduxjs/redux-thunk). Selecting pieces of the state from the different reducers is done with the help of [Reselect](https://github.com/reduxjs/reselect) memoized selectors. Saved characters list is persistent thanks to the implementation of [Redux Persist](https://github.com/rt2zz/redux-persist) that stores it in the browser local storage.
Both in React and Redux hooks are used instead of older patterns. React class components have been replaced by functional components using useState and useEffect. Connect, mapStateToProps and mapDispatchToProps pattern have been replaced by useDispatch and useSelector.
For bundling the app webpack has been used, with babel as parser and eslint and prettier as code linters. Webpack config can be found at /build-tools. Within the folder you can find 4 files, a webpack.common.js file with common config both for production and development, one file with production, one for development and the last one which combines common config and current enviorment config. Babel, eslint and prettier configs can be found at the project root folder inside .babelrc, .eslintre and .prettierrc.
Styling has been done manually using styled components with scss. Inside /style folder at project's root the theme.js file for styled components can be found together with a media queries util and global styles.

## Installing the app

The app is live at [SWAPI People Finder](https://swapi-finder.firebaseapp.com/).
If you want to download it just clone the repo and yarn install in the root folder of the project. Keep in mind that API url from where the info is taken is passed using enviormental variables so you will have to either change it at App.jsx or create your own .env.production and .env.development files and add API_URL variable.
Out of the box, the yarn commands present in the package.json are:

- yarn dev: starts the development server with HMR
- yarn build: bundles production build into build folder
- yarn test: to execute jest + enzyme testing

## App Skeleton

The app is thought to be a SPA, viewed in full screen portrait mode. It is optimized for different screen sizes. A device check is implemented so when the app loaded in a mobile device a modal is shown to ask the user for permission to launch it in full screen, and forces portrait mode to ensure the best experience. This modal will be fired again if the user somehow exits the fullscreen mode.

Changing the current search page or asking for a new search won't block the rest of the app while fetching the API. Users can still interact with their saved list and view character's details. A loading Spinner at SearchPeople indicates that the new fetch request is in progress.

It consists of three main areas with three container componets, SearchPeople, SavedPeople and Information.

### SearchPeople

SearchPeople is in charge of showing a paginated table with the list of the charaters resulting from the entered search by the user. Initially it will show a search with no filters applied. It contains the following:

- A search people title.
- A search box that stores the text to dispatch a filtered request to the API.
- A button in charge to dispatch the search
- A table that shows the information of the characters in the currently selected page of the actual search.

  - The table will render 3 columns for mobile devices and 5 columns for desktop devices.
  - Each table entry has two buttons, one for saving the character in you own list and one to show the character's details in the Information component.
  - Characters saved in the user's list will not be shown in this table.

- A Pagination component in charge of controlling the page the table shows from the current search. It highlights the current page and you can choose the page directly clicking on a button or go to the next or previous using the arrows.

### SavedPeople

SavedPeople is in charge of showing a scrollable list of Cards of each character the user has saved. This list is persistent so the user does not have to save them each time. It contains the following:

- A saved people title.
- A filter component that allows the user to filter the saved characters by gender. It will only be shown when there are characters from at least two different genders.
- A scrollable card list. Each card represents the image of the character and a container with its name and two buttons.

  - Details button will shown the character's details in the Information component.
  - Remove button will remove the character from the saved list.

### Information

Information is in charge of showing the datailed data of the selected character. It contains the following:

- An information about title.
- An image of the character.
- Characters name.
- A table with the details.
- There is an InformationSkeleton component that will be shown as placeholder while the user has not selected any character.

## Data management

As stated before the global state is managed with Redux, Thunk and reselect. There are two reducers, one for the modal data and one for the api data.
Reselect memoized selectors are used to take each property from both reducers states.

#### Modal reducer

Modal reducer is used for containing the following:

- A showModal boolean used for the the modal visibility.
- A modalData object with modalType string and modalProps object as keys with the data needed by InnerModal to know what component it has to render each time and its props.
  Components shown in the modal are lazy loaded and only imported when they are going to be used. modalType stores the string that tells InnerModal which component to import and modalProps is an object with the props needed by the rendered component.

We have two actions for the modal reducer:

- openModal that takes modalData with modalType and modalProps keys and sets showModal to true.
- closeModal that resets modal reducer to its initial state.
  The interaction with the modal reducer is triggered by the device check at App component, which opens the message to enter fullscreen portrait mode for mobile devices.

#### Data reducer

Data reducer stores the following:

- A loadingData boolean that flags to true until the fetch call to the api is finished, either successfully or failed.
- A characterCount number with the total of characters of current search.
- A nextEndpoint string that stores the url for the next page API request.
- A previousEndpoint string that stores the url for the previous page API request.
- A searchArray array of objects with the character's info returned by the API.
- A savedFilter string that stores the filter for the savedArray.
- A savedArray array of objects with the character's info saved by the user.
- A characterSelected object that stores the information of the selected character to display.
- A searchText string with the value of the searchbox.
- An error string that stores the error message when there is an error.

We have nine actions in the data reducer:

- toggleDataLoading that takes a boolean to set either the loadingData to true or false depending when the action is called.
- fetchApiStart. This action is triggered by a useEffect when the App loads, and when we click on a pagination button. Since this action leads to an async event, a fetch call done with axios, this will be handled by Thunk. Once the action is triggered with the url and dispatch as parameters Thunk takes control executes a helper function that makes the api call and waits until it is resolved. Once it is resolved Thunk will trigger one of two actions:
  - fetchApiSuccess with a payload of an array of objects with the search information. The data that is received from the api is processed at the helper before it is sended to the reducer to addapt it to the structure we want to have.
  - fetchApiFailure with a payload of the error.message string in case the fetch fails.
- saveCharacter that takes the character object to be added to saveArray.
- removeCharacter that takes the character's name that we want to remove from saveArray.
- selectCharacter that takes the character object we want to show at Information.
- setFiler that takes a string with the selected filter for savedArray.
- setSearchbox that takes a string with the current search sent to the API.

## PWA

The app is PWA ready. HTML metas are loaded using React Helmet, it has the manifest, the favicons for the different resolutions and devices, https and a serviceWorker registerd. Thanks to the service worker the app can be used even if offline with the data stored at local cache. The app can be installed so it gives a more appy feel in the mobile devices.

## Testing

Testing is done with Jest and Enzyme. Due to the [unsolved](https://github.com/enzymejs/enzyme/issues/2011) issue with useEffect and enzyme, not yet supported for shallow render, and because Enzyme heavily encourages to use shallow mode as much as you can for unit testing some workarounds had to be done to enforce the testing.

### useEffect

useEffect has being spied to intercept it and mock its behavior forcing to execute its callback:

```
    let useEffect;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };
    useEffect = jest.spyOn(React, 'useEffect');

```

We call mockUseEffect each time we want to trigger it. mockImplementationOnce() is used to avoid infinite loops.

```
    mockUseEffect();

```

### useDispatch and useSelector

Similar behaviour occurs with Redux hooks so they are also spied and mocked. **_redux-mock-store_** has been used to create mock stores to be able to dispatching actions together with mocked useDispatch and get data from it using the mocked useSelector

```
    store = configureStore([thunkMiddleware])(dataStore);
    jest.spyOn(Redux, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(Redux, 'useSelector').mockImplementation(() => store.getState());

```

### useState

useState is now working in the latest versions of Enzyme but its values cannot be accessed directly like the props or state values of class component so their values are tested indirectly through components values.

```
    searchBoxInput.simulate('change', { target: { value: 'skywalker' } });
    const searchBoxValue = wrapper.find('SearchBox').prop('value');
    expect(searchBoxValue).toEqual('skywalker');

```

### fetchApiStart

Async action fetchApiStart is spied in the SearchPeople component tests to make sure it is triggered with the value of the searchbox

```
    fetchApiStart = jest.spyOn(dataActions, 'fetchApiStart');

```

When tested in the dataActions tests **_axios-mock-adapter_** is used to mock the get request to the API

```
    const mock = new MockAdapter(axios);
    mock.onGet('https://swapi.dev/api/people/?search=').reply(200, dataFromApiMock);

```

and then the action is dispatched as normal using the dispatch() from redux mock store to check the expected behaviour.

### What is tested?

There are unit test for Card and SearchPeople components and for the data reducer, actions and selectors.
Since almost all of them use another components and helper functions the coverage goes beyond their own scope.
The complete list of tests is as follows:

- Card component

  > matches snapshot

  > has one img with src to C-3PO portrait

  > has one img with src to Darth Vader portrait

  > has one title with text C-3PO

  > has two buttons

  > has one default small size Detail button that triggrs selectCharacter action

  > has one remove small size Remove button that triggrs removeCharacterAction action

- SearchPeople component

  - Store with data tests

  > matches snapshot

  > renders proper tr for header with 3 th with Name, Gender and "" for mobile devices

  > filters searchArray with savedArray and renders 7 Characters

  > changes searchField to skywalker, sends the fetch action with proper url when button is clicked and sets searchtext and resets searchfield

  - Data loading tests

  > matches snapshot

  > renders proper tr for header with 5 th with Name, Gender, Birth year, Eye color and "" for desktop and table devices

  > renders Spinner and no Characters but a placeholder td with a colSpan of 5

- dataActions tests

  - Sync data actions tests

  > toggles to true loadingData

  > updates data received from the api

  > updates error received from the api

  > saves selected character to saveArray

  > removes selected character from saveArray

  > sets the selected filter for saveArray

  > sets the text filter for api search

  - Async data actions tests

  > dispatches fetchApiStart, triggers toogleDataLoading, gets data from the api and dispatches fetchApiSuccess with the response

  > dispatches fetchApiStart, triggers toogleDataLoading, fails to get data from the api and dispatches fetchApiFailure with the error

- dataReducer tests

  > initializes to initial state

  > toggles loading data to true

  > updates data from the api when the fetch has succeeded

  > updates error when the fetch has failed

  > saves selected character to savedArray

  > removes selected character from savedArray

  > stores character to show in information component

  > stores gender filter for savedArray

  > stores search text from current search

  > returns state as default option

- dataSelectors tests

  > selects loadingData

  > selects characterCount

  > selects nextEndpoint

  > selects previousEndpoint

  > selects searchArray

  > selects savedFilter

  > selects savedArray

  > selects characterSelected

  > selects searchText
