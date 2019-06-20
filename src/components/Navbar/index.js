import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {Button, Container, Icon, Menu, Responsive, Sidebar, Visibility,} from 'semantic-ui-react'
import {DesktopSegment, MobileSegment} from './style'
import {Link, withRouter} from "react-router-dom";
import StickyButton from "../StickyButton";

const getWidth = () => window.innerWidth

const isActive = (currentLocation) => (path) => {
    return path === currentLocation
}

const DesktopContainer = ({children, location}) => {
    const [fixed, setFixed] = useState(false)

    const hideFixedMenu = () => setFixed(false)
    const showFixedMenu = () => setFixed(true)

    const isMenuActive = isActive(location.pathname)

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <DesktopSegment
                    inverted
                    textAlign='center'
                    vertical
                >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                    >
                        <Container>
                            <Menu.Item data-testid="link-to-home" as={Link} to='/' active={isMenuActive('/')}>
                                Home
                            </Menu.Item>
                            <Menu.Item data-testid="link-to-search" as={Link} to='/user' active={isMenuActive('/user')}>Pesquisar
                                anúncios</Menu.Item>
                            <Menu.Item data-testid="link-to-my-listing" as={Link}>Meus anúncios</Menu.Item>
                            <Menu.Item data-testid="link-to-my-proposal" as={Link}>Minhas Propostas</Menu.Item>
                            <Menu.Item data-testid="link-to-how-it-works" as={Link}>Como Funciona?</Menu.Item>
                            <Menu.Item position='right'>
                                <Button data-testid="logout-button" as='a' inverted={!fixed} primary={fixed}
                                        style={{marginLeft: '0.5em'}}>
                                    Sair
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </DesktopSegment>
            </Visibility>

            {children}
        </Responsive>
    )
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

const MobileContainer = ({children, location}) => {
    const [sidebarOpened, setSidebarOpened] = useState(false)

    const handleSidebarHide = () => setSidebarOpened(false)
    const handleToggle = () => setSidebarOpened(true)

    const isMenuActive = isActive(location.pathname)

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
                as={Menu}
                animation='push'
                inverted
                onHide={handleSidebarHide}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item as={Link} active={isMenuActive('/')}>
                    Home
                </Menu.Item>
                <Menu.Item as={Link}>Pesquisar anúncios</Menu.Item>
                <Menu.Item as={Link}>Meus anúncios</Menu.Item>
                <Menu.Item as={Link}>Minhas Propostas</Menu.Item>
                <Menu.Item as={Link}>Como Funciona?</Menu.Item>
                <Menu.Item as={Link}>Sair</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened} style={{padding: 0}}>
                <MobileSegment
                    inverted
                    textAlign='center'
                    basic
                    vertical
                >
                    <Container style={{margin: 'auto'}}>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={handleToggle}>
                                <Icon name='sidebar'/>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </MobileSegment>
                {children}
            </Sidebar.Pusher>
        </Responsive>
    )
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <DesktopContainer location={props.location}>{props.children}</DesktopContainer>
            <MobileContainer location={props.location}>{props.children}</MobileContainer>
        </div>
    )
}

export default withRouter(ResponsiveContainer)
