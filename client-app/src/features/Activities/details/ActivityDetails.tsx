import React, { useContext } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import activityStore from '../../../app/stores/activityStore'
import {observer} from 'mobx-react-lite';


const ActivityDetails: React.FC= () => {
    const activitStore = useContext(activityStore);
    const {selectedActivity: activity, openEditForm, cancelSelectdActivity} = activitStore;
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity!.category}.jpg`} 
            wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span>{activity!.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity!.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths = {2}>
                    <Button onClick={() => openEditForm(activity!.id)} 
                    basic color = 'blue' 
                    content='Edit'/>
                    <Button onClick={cancelSelectdActivity}
                    basic color = 'grey' 
                    content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
export default observer (ActivityDetails);
