import { useEffect, useState } from 'react';

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts")

            if(response.ok){
                const json = await response.json()
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    }, [])

    return (
      <div className="home">
       <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
        
      </div>
    );
}

export default Home;