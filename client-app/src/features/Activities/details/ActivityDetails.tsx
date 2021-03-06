import React, { useContext, useEffect } from 'react'
import {Grid } from 'semantic-ui-react'
import activityStore from '../../../app/stores/activityStore'
import {observer} from 'mobx-react-lite';
import { RouteComponentProps} from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

interface DetailParams {
    id: string
}


const ActivityDetails: React.FC<RouteComponentProps<DetailParams>>= ({
    match,
    history
   }) => {
    const activitStore = useContext(activityStore);
    const {activity: activity, loadActivity, loadingInitial} = activitStore;

    useEffect(() => {
        loadActivity(match.params.id);
         
    }, [loadActivity, match.params.id, history])

     if (loadingInitial || !activity) 
        return <LoadingComponent content= 'Loading activity...'/>

        if(!activity)
        return <h2>Activity not found</h2>


    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailsHeader activity={activity}/>
                <ActivityDetailedInfo activity = {activity}/>
                <ActivityDetailedChat />
            </Grid.Column>


            <Grid.Column width={6}>
                 <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}
export default observer (ActivityDetails);
