"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getGoals = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .eq("userId", userId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching goals:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const createGoal = async (goalData, userId) => {
  try {
    const { data, error } = await supabase
      .from("goals")
      .insert({
        ...goalData,
        userId,
      });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error creating goal:", error);
    return null;
  }
};

export const updateGoal = async (goalId, goalData) => {
  try {
    const { data, error } = await supabase
      .from("goals")
      .update(goalData)
      .eq("id", goalId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error updating goal:", error);
    return null;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const { data, error } = await supabase
      .from("goals")
      .delete()
      .eq("id", goalId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error deleting goal:", error);
    return null;
  }
};

export const getWorkouts = async (userId) => {
  try {
    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .eq("userId", userId)
      .order("date", { ascending: false });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const createWorkout = async (workoutData, userId) => {
  try {
    const { data, error } = await supabase
      .from("workouts")
      .insert({
        ...workoutData,
        userId,
      });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error creating workout:", error);
    return null;
  }
};

export const updateWorkout = async (workoutId, workoutData) => {
  try {
    const { data, error } = await supabase
      .from("workouts")
      .update(workoutData)
      .eq("id", workoutId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error updating workout:", error);
    return null;
  }
};

export const deleteWorkout = async (workoutId) => {
  try {
    const { data, error } = await supabase
      .from("workouts")
      .delete()
      .eq("id", workoutId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error deleting workout:", error);
    return null;
  }
};

export const getPosts = async () => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
          id, 
          content,
          user: users(email)
        `
      )
      .order("created_at", { ascending: false });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const createPost = async (postData) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .insert(postData);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error creating post:", error);
    return null;
  }
};

export const updatePost = async (postId, postData) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .update(postData)
      .eq("id", postId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error updating post:", error);
    return null;
  }
};

export const deletePost = async (postId) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .delete()
      .eq("id", postId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error deleting post:", error);
    return null;
  }
};

export const getGoalProgress = async (goalId, userId) => {
  try {
    const { data, error } = await supabase
      .from("goal_progress")
      .select("*")
      .eq("goalId", goalId)
      .eq("userId", userId)
      .order("date", { ascending: false });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching goal progress:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const createGoalProgress = async (progressData, goalId, userId) => {
  try {
    const { data, error } = await supabase
      .from("goal_progress")
      .insert({
        ...progressData,
        goalId,
        userId,
      });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error creating goal progress:", error);
    return null;
  }
};

export const updateGoalProgress = async (progressId, progressData) => {
  try {
    const { data, error } = await supabase
      .from("goal_progress")
      .update(progressData)
      .eq("id", progressId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error updating goal progress:", error);
    return null;
  }
};

export const deleteGoalProgress = async (progressId) => {
  try {
    const { data, error } = await supabase
      .from("goal_progress")
      .delete()
      .eq("id", progressId);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error deleting goal progress:", error);
    return null;
  }
};