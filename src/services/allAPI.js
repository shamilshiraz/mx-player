



import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverUrl";

// to upload a new video
export const uploadVideoAPi=async(video)=>{
return await commonAPI("POST",`${serverURL}/allvideos`,video)
}

// display videos/get videos

export const getAllUploadedVideos=async()=>{
return await commonAPI('GET',`${serverURL}/allvideos`,'')
}

// Get a video played

export const getAVideo=async(id)=>{
    return await commonAPI('GET',`${serverURL}/allvideos${id}`,'')
}

// Store it in watch history

export const addToWatchHistory=async(video)=>{
    return await commonAPI('POST',`${serverURL}/history`,video)
}

// show it in watch history

export const getWatchHistory=async()=>{
    return await commonAPI('GET',`${serverURL}/history`,)
}

// delete history

export const deleteWatchHistory=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// delete video

export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/allvideos/${id}`,{})
}

// add video to category

export const addCategory=async(category)=>{
    return await commonAPI('POST',`${serverURL}/category `,video)
}

// get all videos to category

export const getCategory=async(category)=>{
    return await commonAPI('GET',`${serverURL}/category `,'')
}

