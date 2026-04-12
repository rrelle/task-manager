'use client'

import {useState, useEffect } from 'react';

import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import TaskStats from './TaskStats';

export default function TaskBoard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Task Manager</h1>
            <AddTaskForm />
            <TaskList />
            <TaskStats />
        </div>
    );
}

    