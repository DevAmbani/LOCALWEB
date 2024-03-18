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
import { ThemeProvider } from '@emotion/react';
import colorfontTheme from './colorfontTheme';

ReactDOM.render(
    
    <ChakraProvider theme={theme}>
        
        <React.StrictMode>
            
                <HashRouter>
                    <Switch>
                        <Route path="/auth" component={AuthLayout} />
                        <Route path="/admin" component={AdminLayout} />
                        <Route path="/rtl" component={RtlLayout} />
                        <ThemeProvider theme={colorfontTheme}> <Route path="/eventsForm" component={EventsForm} /></ThemeProvider>
                        <ThemeProvider theme={colorfontTheme}><Route path="/eventsCount" component={EventsCount} /></ThemeProvider>
                        <ThemeProvider theme={colorfontTheme}><Route path="/" component={Category} /></ThemeProvider>
                    </Switch>
                </HashRouter>
            
        </React.StrictMode>

    </ChakraProvider>,
    document.getElementById('root')
);
