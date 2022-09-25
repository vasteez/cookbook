import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Instructions = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.p}>
        In the skillet melt butter and then fry all filling ingredients for 3-5
        minutes on medium heat. Cool completely.
        {"\n"}
        {"\n"}
        In the bowl combine all ingredients. Beat at low speed scraping bowl
        often, until well mixed. Divide dough in half; flatter each into about a
        1/2 inch thick recangle. Wrap in plastic food wrap: regriderate for 20
        minutes.
        {"\n"}
        {"\n"}
        Preheat over to 375*. On Lightly flowered surface roll half of dough
        into rectangle. Cut into six four inches squares. In center of each
        square place 2 teaspoons pie filling. Fold one corner of square over to
        form a triangle. Lightly brush bottom inside edges with beaten egg
        whites. Pinch together edges to seal; crimp with fork. Place on a
        lightly greased cookie sheet. Repeat with remaining dough and filling.
        {"\n"}
        {"\n"}
        Brush tops with remaining egg whites. Carefully prick tops in 2 or 3
        places with fork. Bake for 20-25 minutes or until lighly golden brown.
        Cool 10 minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
  },
  p: {
    color: "#DFDFDF",
    textAlign: "justify",
  },
});

export default Instructions;