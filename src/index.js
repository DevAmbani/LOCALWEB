import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import Category from './category';
import EventsCount from './eventsCount';
import EventsForm from './eventsForm';

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <ThemeEditorProvider>
                <HashRouter>
                    <Switch>
                        <Route path="/auth" component={AuthLayout} />
                        <Route path="/admin" component={AdminLayout} />
                        <Route path="/rtl" component={RtlLayout} />
                        <Route path="/eventsForm" component={EventsForm} />
                        <Route path="/eventsCount" component={EventsCount} />
                        <Route path="/" component={Category} />
                    </Switch>
                </HashRouter>
            </ThemeEditorProvider>
        </React.StrictMode>
    </ChakraProvider>,
    document.getElementById('root')
);
