import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import Category from './category';
import EventsCount from './eventsCount';
import EventsForm from './eventsForm';
import SignIn from './views/auth/signIn'; // Adjust the import path as needed
import { ThemeProvider } from '@emotion/react';
import colorfontTheme from './colorfontTheme';

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <ThemeEditorProvider>
                <Router>
                    <Switch>
                        <Route path="/admin" component={AdminLayout} />
                        <Route path="/rtl" component={RtlLayout} />
                        </Switch>
                        <ThemeProvider theme={colorfontTheme}>
                            <Route path="/category" component={Category} />
                            <Route path="/eventsForm" component={EventsForm} />
                            <Route path="/eventsCount" component={EventsCount} />
                        </ThemeProvider>
                        <Route path="/" exact component={SignIn} />
                        <Redirect to="/" />
                   
                </Router>
            </ThemeEditorProvider>
        </React.StrictMode>
    </ChakraProvider>,
    document.getElementById('root')
);
