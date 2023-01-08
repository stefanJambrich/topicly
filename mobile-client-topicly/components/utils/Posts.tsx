import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Posts = () => {
    return (
        <Pressable style={styles.container}
        >
            <LinearGradient
                colors={['#EA539A',
                    '#D22E7B',
                    '#830891',]}
                locations={[0.19, 0.50, 0.96]}
                start={{ x: 0.4, y: 0 }}
                end={{ x: 0.8, y: 1.1 }}
                style={styles.gradient}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.userContainer}>
                        <LinearGradient
                            colors={['#EA539A',
                                '#D22E7B',
                                '#830891',]}
                            locations={[0.19, 0.50, 0.96]}
                            start={{ x: 0.4, y: 0 }}
                            end={{ x: 0.8, y: 1.1 }}
                            style={styles.gradientUser}
                        >
                            <Image style={styles.userImage}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />

                        </LinearGradient>
                        <Text style={styles.text}>
                            NEGGGR
                        </Text>
                        <Pressable style={styles.followContainer}>
                            <LinearGradient
                                colors={['#EA539A',
                                    '#D22E7B',
                                    '#830891',]}
                                locations={[0.19, 0.50, 0.96]}
                                start={{ x: 0.4, y: 0 }}
                                end={{ x: 0.8, y: 1.1 }}
                                style={styles.gradientFollow}
                            >
                                <View style={styles.followInsert}>
                                    <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: 18 }}>
                                        Follow
                                    </Text>
                                </View>
                            </LinearGradient>
                        </Pressable>
                    </View>
                    <Image source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600930268211-JJEAN5IFI67IOS8HKKVQ/Top+20+Social+Media+App+Inspiration+%231+-+1.jpg?format=1000w' }}
                        style={{ width:"100%",height: 200, alignSelf:"center", borderRadius: 8 }}
                    />
                    <Text numberOfLines={4} style={styles.postText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem! Vel eligendi commodi sequi cupiditate sunt, dicta nisi illo blanditiis corrupti, ipsum, repudiandae delectus deleniti. Numquam voluptas dolorum, voluptatibus nobis fugiat dolorem commodi a repudiandae iusto? Modi beatae saepe distinctio at delectus nihil magni, libero iure commodi quam sit similique dignissimos quis reiciendis, ad necessitatibus odio cupiditate numquam ipsa assumenda eveniet! Ad blanditiis quasi voluptatum iste vitae repellat obcaecati commodi. Labore ex eos natus reprehenderit repellendus optio hic alias fuga eum ut animi aspernatur sed sit aliquam iusto quam commodi, officia molestias, pariatur nemo sunt, ratione aut possimus. Temporibus, non expedita tenetur hic consequatur natus error, reprehenderit rem quas pariatur sequi minima, dolores eos? Facere, reiciendis doloribus minima aut qui accusantium repellat assumenda eos quas, iure odit quo eius illo et perspiciatis dignissimos debitis. Iure ipsam explicabo perferendis assumenda consequuntur vel. Nostrum architecto eum dignissimos, sint maxime ea, dolores blanditiis veritatis voluptatum deleniti sed sequi a velit quidem sit. Adipisci quas cumque laborum, veritatis ad nulla magni deleniti doloribus dolores quibusdam harum tenetur nostrum, explicabo commodi cupiditate deserunt consectetur voluptas aut incidunt necessitatibus omnis, rem itaque? Sed debitis sunt dolorum pariatur suscipit reiciendis praesentium, eaque tenetur expedita amet hic eius cumque? Asperiores hic ipsam saepe quod vel, explicabo totam impedit architecto perferendis nihil vero a, at, placeat esse reiciendis! Reprehenderit quaerat ullam quas tempore non id quidem optio, eveniet impedit corporis molestiae unde atque perspiciatis inventore. Consequatur vero optio nihil alias vitae aspernatur officiis nostrum dolor obcaecati, natus illo! Reprehenderit fuga quisquam nam ex placeat.
                    </Text>
                    <View style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop: -50, marginRight: 15}}>
                        <View style={{flex:1}}>

                        </View>
                    <Pressable style={styles.bottomButtons}>
                            <LinearGradient
                                colors={['#EA539A',
                                    '#D22E7B',
                                    '#830891',]}
                                locations={[0.19, 0.50, 0.96]}
                                start={{ x: 0.4, y: 0 }}
                                end={{ x: 0.8, y: 1.1 }}
                                style={styles.gradientBottom}
                            >
                                <View style={styles.bottomInsert}>
                                    <Icon name={"bookmark-outline"} size={36} color="#fff" />
                                </View>
                            </LinearGradient>
                        </Pressable>
                        <Pressable style={styles.bottomButtons}>
                            <LinearGradient
                                colors={['#EA539A',
                                    '#D22E7B',
                                    '#830891',]}
                                locations={[0.19, 0.50, 0.96]}
                                start={{ x: 0.4, y: 0 }}
                                end={{ x: 0.8, y: 1.1 }}
                                style={styles.gradientBottom}
                            >
                                <View style={styles.bottomInsert}>
                                    <Icon name={"heart-outline"} size={36} color="#fff" />
                                </View>
                            </LinearGradient>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "97%",
        height: 500,
        backgroundColor: '#1C1C1C',

        marginTop: 15
    },
    text: {
        color: "rgba(255,255,255,0.75)",
        fontSize: 20,
        marginLeft: 15,
        flex: 1
    },
    gradient: {
        borderRadius: 8,
        width: "100%",
        height: "98%",
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#2b2a2a",
        borderRadius: 8,
    },
    userContainer: {
        width: "90%",
        height: "18%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: "5%",
    },
    gradientUser: {
        width: "15%",
        height: "65%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    userImage: {
        width: "97%",
        height: "97%",
        borderRadius: 16,
    },
    gradientFollow: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    followContainer: {
        width: "35%",
        height: "55%",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    followInsert: {
        width: "98%",
        height: "96%",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2b2a2a"
    },
    gradientBottom: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomButtons: {
        width: "15%",
        height: "32%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
        
    },
    bottomInsert: {
        width: "96%",
        height: "96%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2b2a2a"
    },
    postText:{
        color:"rgba(255,255,255,0.75)",
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 8,
    }
});

export default Posts