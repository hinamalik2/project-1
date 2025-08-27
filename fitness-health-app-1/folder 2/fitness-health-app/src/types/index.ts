// This file exports TypeScript types and interfaces used throughout the application.

export interface User {
    id: string;
    username: string;
    email: string;
    password?: string; // Optional for security reasons
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Workout {
    id: string;
    type: string; // e.g., 'strength', 'cardio', 'yoga'
    duration: number; // in minutes
    intensity: 'low' | 'medium' | 'high';
    caloriesBurned: number;
    date: Date;
}

export interface Meal {
    id: string;
    name: string;
    calories: number;
    protein: number; // in grams
    carbs: number; // in grams
    fats: number; // in grams
    date: Date;
}

export interface Progress {
    id: string;
    weight: number; // in kg
    bmi: number;
    bodyMeasurements: {
        chest: number; // in cm
        waist: number; // in cm
        hips: number; // in cm
    };
    date: Date;
}

export interface Goal {
    id: string;
    type: 'weightLoss' | 'weightGain' | 'maintenance';
    targetWeight: number; // in kg
    targetDate: Date;
}

export interface Notification {
    id: string;
    message: string;
    date: Date;
    read: boolean;
}