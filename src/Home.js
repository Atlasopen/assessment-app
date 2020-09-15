import React, { useEffect, useState } from "react";
import { useFirebaseApp } from 'reactfire';
import { useUser } from 'reactfire';
import Logout from './Logout';
import 'firebase/auth'
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom';

export default function Home() {

    return (
        <div>
            <h1>Homepage</h1>
            <Logout />
        </div>
    )

}
