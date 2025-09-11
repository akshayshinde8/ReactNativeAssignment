import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const flatListRef = useRef(null);

  const loadPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadPosts();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { post: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="document-text-outline" size={28} color="#007AFF" />
        <Text style={styles.headerTitle}>Posts</Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ marginTop: 50 }}
        />
      ) : (
        <>
          <FlatList
            ref={flatListRef}
            data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              posts.length > 0 ? (
                <Text style={styles.footer}>— End of List —</Text>
              ) : null
            }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No posts found</Text>
              </View>
            }
            onScroll={event => {
              const offsetY = event.nativeEvent.contentOffset.y;
              setShowScrollTop(offsetY > 200);
            }}
          />

          {showScrollTop && (
            <TouchableOpacity
              style={styles.scrollTopBtn}
              onPress={() =>
                flatListRef.current.scrollToOffset({
                  offset: 0,
                  animated: true,
                })
              }
            >
              <Ionicons name="arrow-up" size={22} color="#fff" />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 10,
    color: '#007AFF',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#007AFF',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginBottom: 60,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
  scrollTopBtn: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 30,
    elevation: 6,
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
});
