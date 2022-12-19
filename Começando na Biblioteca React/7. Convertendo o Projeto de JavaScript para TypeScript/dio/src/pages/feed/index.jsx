import raquelPicture from '../../assets/teresa-photo.jpeg';
import denePicture from '../../assets/dene-photo.jpg';
import fePicture from '../../assets/fe-photo.jpg';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={60} nome="Rafaela Santos" image="https://scontent.fcgh22-1.fna.fbcdn.net/v/t39.30808-6/314353189_1737374096629572_9120386352224096692_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1SSF0_QRSTAAX9P6ewQ&_nc_ht=scontent.fcgh22-1.fna&oh=00_AfD29D5OJbV2y3w0MzUVkcVa7E_Y1lf1NvBo0ggctNsoDg&oe=63A3E2A8"/>
                <UserInfo percentual={50} nome="Eduardo Almeida" image="https://avatars.githubusercontent.com/u/114373550?v=4"/>
                <UserInfo percentual={89} nome="Raquel Ferreira" image={raquelPicture}/>
                <UserInfo percentual={57} nome="Felipe Almeida" image={fePicture}/>
                <UserInfo percentual={60} nome="Aldenira Nascimento" image={denePicture}/>
            </Column>
        </Container>
    </>)
}

export { Feed }