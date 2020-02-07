import { AppNavigation } from '@navigation';
import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { FileService } from '@services';
import { ApplicationState } from '@store';
import { Store } from 'redux';
import { configureStore } from './store/configureStore';
import { Provider } from "react-redux";

interface AppState {
    isLoaded: boolean;
}
export default class App extends Component<any, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
    store: Store<ApplicationState>;
    async componentDidMount() {
        const initialState = await FileService.readStateFromFile();
        this.store = configureStore(initialState);
        this.setState({ isLoaded: true });
    }
    render() {
        return <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} forceInset={{ top: "always", bottom: "always" }}>
                {this.state.isLoaded ? <Provider store={this.store}>
                    <AppNavigation />
                </Provider> : <View></View>}
            </SafeAreaView>
        </SafeAreaProvider>
    }
}