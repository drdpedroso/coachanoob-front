import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {Button, Container, Icon, Menu, Responsive, Sidebar, Visibility,} from 'semantic-ui-react'
import {DesktopSegment, MobileSegment} from './style'

const getWidth = () => window.innerWidth

const DesktopContainer = (props) => {
    const [fixed, setFixed] = useState(false)

    const hideFixedMenu = () => setFixed(false)
    const showFixedMenu = () => setFixed(true)

    const { children } = props
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
                            <Menu.Item as='a' active>
                                Home
                            </Menu.Item>
                            <Menu.Item as='a'>Pesquisar anúncios</Menu.Item>
                            <Menu.Item as='a'>Meus anúncios</Menu.Item>
                            <Menu.Item as='a'>Minhas Propostas</Menu.Item>
                            <Menu.Item as='a'>Como Funciona?</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
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

const MobileContainer = (props) => {
    const [sidebarOpened, setSidebarOpened] = useState(false)

    const handleSidebarHide = () => setSidebarOpened(false)
    const handleToggle = () => setSidebarOpened(true)

    const { children } = props
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
                <Menu.Item as='a' active>
                    Home
                </Menu.Item>
                <Menu.Item as='a'>Pesquisar anúncios</Menu.Item>
                <Menu.Item as='a'>Meus anúncios</Menu.Item>
                <Menu.Item as='a'>Minhas Propostas</Menu.Item>
                <Menu.Item as='a'>Como Funciona?</Menu.Item>
                <Menu.Item as='a'>Sair</Menu.Item>
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
                                <Icon name='sidebar' />
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

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

export default ResponsiveContainer
