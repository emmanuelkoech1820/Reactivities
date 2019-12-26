import React, { useContext } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import {observer} from 'mobx-react-lite';
import ActivityStore from '../../src/app/stores/activityStore';

const NavBar: React.FC = ({}) => {
    const activityStore = useContext(ActivityStore);
    return (
        <div>
    <Menu fixed = 'top' inverted>
        <Container> 
            <Menu.Item header>
                <img src="/assets/logo.png" alt ="logo" style={{marginRight: 10}}/>
                Reactivities                
                </Menu.Item> 
            <Menu.Item name='Activities'/>
            <Menu.Item >
                <Button 
                onClick={activityStore.openCreateForm} 
                positive 
                content='create activity'
                />
            </Menu.Item>
         </Container>
    
       
      </Menu>
            
        </div>
    )
};
export default observer (NavBar);
