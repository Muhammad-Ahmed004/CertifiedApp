import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function InspectionScreen() {
  const [selectedPart, setSelectedPart] = useState("Front Bumper");

  const parts = ["Front Bumper", "Back Bumper", "Grill", "Hood", "Trunk"];

  return (
    <ScrollView
      style={tw`flex-1 bg-white pt-10 px-2`}
      contentContainerStyle={tw`pb-20 px-4`}
      showsVerticalScrollIndicator={true}
    >
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-6`}>
        <Text style={tw`text-lg font-bold text-green-800`}>
          Vehicle Inspection
        </Text>
        <TouchableOpacity>
          <FontAwesome5 name="user-circle" size={24} color="#9ca3af" />
        </TouchableOpacity>
      </View>

      {/* Select Body Part Card */}
      <View style={tw`bg-white rounded-xl p-4 shadow border border-gray-200`}>
        <Text style={tw`text-green-800 font-semibold mb-3`}>
          Select Body Part
        </Text>
        {parts.map((part, index) => (
          <TouchableOpacity
            key={index}
            style={tw`flex-row items-center mb-3`}
            onPress={() => setSelectedPart(part)}
          >
            <View
              style={[
                tw`w-5 h-5 rounded-full border-2 mr-3`,
                {
                  borderColor:
                    selectedPart === part ? "#fbbf24" : "#d1d5db", // yellow or gray
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              {selectedPart === part && (
                <View style={tw`w-2.5 h-2.5 bg-yellow-400 rounded-full`} />
              )}
            </View>
            <Text
              style={[
                tw`text-base`,
                { fontWeight: selectedPart === part ? "bold" : "normal" },
              ]}
            >
              {part}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Car Image */}
      <View style={tw`mt-6`}>
        <Image
          source={require("../../assets/Car.png")} // apne folder path ke hisaab se adjust karo
          style={tw`w-full h-48 rounded-xl`}
          resizeMode="cover"
        />
        <Text style={tw`text-gray-500 mt-2`}>
          Scanning {selectedPart}
        </Text>

        {/* Progress Bar */}
        <View style={tw`w-full h-2 bg-gray-200 rounded-full mt-1`}>
          <View
            style={[tw`h-2 bg-yellow-400 rounded-full`, { width: '30%' }]}
          />
        </View>
      </View>


      {/* Start Inspection Button */}
      <TouchableOpacity
        style={tw`bg-green-700 p-3 rounded-lg mt-6`}
        onPress={() => alert("Inspection Started!")}
      >
        <Text style={tw`text-white text-center font-bold text-md`}>
          Start Inspection
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
