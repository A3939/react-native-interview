import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import useRequest from '@hooks/useRequest';
import {IMovie, IMovieResponse} from './config';

const Home = () => {
  //Custom hooks
  const {request} = useRequest();

  //States
  const [movies, setMovies] = useState<IMovie[]>([]);

  //Hooks
  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    try {
      const res = await request<IMovieResponse>({
        url: 'movie/popular?language=en-US&page=1',
        method: 'GET',
      });
      setMovies(res.data.results);
    } catch (error) {}
  };

  //Component
  const renderMovieCard = ({item}: {item: IMovie}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <FlatList data={movies} renderItem={renderMovieCard} />
    </SafeAreaView>
  );
};

export default Home;
