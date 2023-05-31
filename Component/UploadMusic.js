import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';


const UploadMusicScreen = ()=>{
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [fileUri, setFileUri] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

  

    const pickMusicFile = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access media library is not granted');
    return;
  }
    
      const documentResult = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
        copyToCacheDirectory: false,
      });


    //  setSelectedFile(documentResult)



      if (documentResult.type === 'cancel') {
        console.log('Document picker was cancelled');
        return;
      }
    
      
      const fileUri = documentResult.uri;
      const fileType = documentResult.type;
      const fileName = documentResult.name;
  
      // console.log(fileUri)

      uploadMusicFile(fileUri, fileType, fileName);
    };

    const uploadMusicFile = async (fileUri, fileType, fileName) => {
      const formData = new FormData();
      formData.append('musicFile', {
        uri: fileUri,
        name: fileName,
        type: fileType,
      });
    


      try {
      await axios.post('https://general-nuyw.onrender.com/musicm', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((res)=>{
          console.log('Music file uploaded successfully:', res.data);
        }).catch((err)=>{
          console.log(err)
        })
        
      } catch (error) {
        console.log('Error uploading music file:', error);
      throw error; 
      }
    };
    
    

    useEffect(() => {
      try {
        axios.get("https://general-nuyw.onrender.com/musicm")
      .then((response)=> {
        console.log(response.data)
      })
      .catch((err)=>console.log(err))
      } catch (error) {
        console.log(error)
      }
      
    }, []);
    







    return(
        <View>
 <View>
  <Button title="Select Audio File" onPress={pickMusicFile} />
</View>
 
        </View>
    )
}


export default UploadMusicScreen;