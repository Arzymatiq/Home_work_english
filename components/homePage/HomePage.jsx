import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import tw from "twrnc";
import styled from "styled-components";
import { ScrollView } from "react-native";

function App(props) {
    const BossText = styled.Text`
        font-size: 15px;
        color: white;
        font-weight: bold;
    `;
    const toTheOtsenkiKoroche = () => {
        // Действие при нажатии на ссылку
        Linking.openURL("https://docs.google.com/spreadsheets/u/0/?tgif=d");
    };
    const toTheRaspisanie = () => {
        // Действие при нажатии на ссылку
        Linking.openURL(
            "https://docs.google.com/spreadsheets/d/1N_I2dUPpSVdaRaZZ7iQp-rRgmtu3aKva/edit#gid=252578625"
        );
    };

    return (
        <>
            <View
                style={tw`w-full h-30 justify-center items-center bg-blue-600`}>
                <View
                    style={tw`flex-row justify-between items-center w-full h-full mt-5`}>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={() => props.navigation.navigate("Notes")}>
                        <Text style={tw`text-white`}>заметки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={() => props.navigation.navigate("News")}>
                        <Text style={tw`text-white`}>новости</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={toTheRaspisanie}>
                        <Text style={tw`text-white`}>расписание</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-1 items-center`}
                        onPress={toTheOtsenkiKoroche}>
                        <Text style={tw`text-white`}>оценки</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {/*  */}
                <View
                    style={[
                        tw`w-100 justify-center items-center bg-blue-500 `,
                        { height: "100vh" },
                    ]}>
                    <Text
                        style={[
                            tw`text-white text-lg`,
                            {
                                color: "#FFA500",
                                fontSize: 25,
                                fontWeight: "bold",
                            },
                        ]}>
                        ПРИВЕТСТВЕННЫЕ СЛОВА
                    </Text>

                    <Image
                        source={require("../img/photo-2023-05-02-22-48-01_auto_x2.jpg")}
                        style={
                            [
                                tw`w-48 h-48`,
                                { borderRadius: 50 },
                            ] /* 48 / 2 = 24 */
                        }
                    />
                    <Text
                        style={[
                            tw`text-white text-lg`,
                            {
                                color: "#FFA500",
                                fontSize: 18,
                                fontWeight: "bold",
                            },
                        ]}>
                        ДИРЕКТОР ГТК
                    </Text>
                    <Text
                        style={[
                            tw`text-white text-lg`,
                            {
                                color: "#FFA500",
                                fontSize: 18,
                                fontWeight: "bold",
                            },
                        ]}>
                        СТОРОЖЕВЫХ В. В.
                    </Text>
                    <View
                        style={tw`w-75 justify-center items-center bg-blue-500 `}>
                        <View>
                            <BossText>
                                ДОРОГИЕ ДРУЗЬЯ, ПОТЕНЦИАЛЬНЫЕ СТУДЕНТЫ, БУДУЩИЕ
                                ПЕРВОКУРСНИКИ, КОЛЛЕГИ, ПАТРИОТЫ И СОРАТНИКИ, И
                                ПРОСТО ПОСЕТИТЕЛИ НАШЕГО ОФИЦИАЛЬНОГО САЙТА.
                            </BossText>

                            <BossText>
                                ОТ ЛИЦА НАШЕГО ДРУЖНОГО, ПРОФЕССИОНАЛЬНОГО И
                                СПЛОЧЕННОГО КОЛЛЕКТИВА, ОТ ИМЕНИ НАШЕЙ СЕМЬИ –
                                ВЫПУСКНИКОВ, ПОПЕЧИТЕЛЕЙ, РАБОТОДАТЕЛЕЙ,
                                НАСТАВНИКОВ, СТУДЕНТОВ И ИХ РОДИТЕЛЕЙ, ИСКРЕННЕ
                                ПРИВЕТСТВУЮ ВАС!
                            </BossText>
                            <BossText>
                                СВОИМ ПОСЕЩЕНИЕМ И ЧИТАЯ ЭТИ СТРОКИ, ВЫ УЖЕ
                                ПРИОТКРЫЛИ ДВЕРИ В МИР РАЗВИТИЯ, НАУКИ,
                                ВОЗМОЖНОСТЕЙ, ЧЕСТИ И ПРОФЕССИОНАЛИЗМА. И Я
                                НАДЕЮСЬ, ЧТО ВЫ В ПОЛНОЙ МЕРЕ ВОСПОЛЬЗУЕТЕСЬ
                                ТЕМИ ВОЗМОЖНОСТЯМИ, КОТОРЫЕ ПРЕДОСТАВЛЯЕТ
                                ГУМАНИТАРНО ТЕХНИЧЕСКИЙ КОЛЛЕДЖ МЕЖДУНАРОДНОГО
                                УНИВЕРСИТЕТА В ЦЕНТРАЛЬНОЙ АЗИИ, И СТАНЕТЕ
                                НОВЫМИ, ОЖИДАЕМЫМИ И ПОЛНОПРАВНЫМИ ЧЛЕНАМИ НАШЕЙ
                                МЕЖДУНАРОДНОЙ, УСПЕШНОЙ, СИЛЬНОЙ И СОВРЕМЕННОЙ
                                СЕМЬИ.
                            </BossText>
                            <BossText>
                                ОСНОВЫВАЯСЬ НА МИССИ И ЦЕЛЯХ, МЫ ОПИРАЕМСЯ НА
                                НЕПРЕХОДЯЩУЮ ВОССТРЕБОВАННОСТЬ КАЧЕСТВЕННОГО
                                ОБРАЗОВАНИЯ МЕЖДУНАРОДНОГО УРОВНЯ, НА ЦЕННОСТИ
                                ТРУДА ПЕДАГОГА, НА ЕГО ОБЩЕСТВЕННУЮ И
                                СТРАТЕГИЧЕСКУЮ ВАЖНОСТЬ.
                            </BossText>
                            <BossText>
                                ИМЕННО ПО ЭТОМУ У НАС САМОЕ БЕРЕЖНОЕ ОТНОШЕНИЕ К
                                НАШИМ СТУДЕНТАМ, ОСОБЕННО К ПЕРВОКУРСНИКАМ.
                                КОТОРЫХ МЫ МЕТОДИЧНО И ЦЕЛЕНАПРАВЛЕННО ОБУЧАЕМ,
                                ВЕДЕМ И СОПРОВОЖДАЕМ В ПРОЦЕССЕ РАЗВИТИЯ ИХ
                                СПОСОБНОСТЕЙ И КВАЛИФИКАЦИИ, ДЕЛАЯ ОСОБЫЙ АКЦЕНТ
                                НА НАВЫКИ, ЗНАНИЯ, ЧЕСТЬ И ДОСТОИНСТВО. ВЕДЕМ ИХ
                                К ПОЗНАНИЮ НОВОГО И ОСОЗНАНИЮ СВОЕЙ МИССИИ, УЧИМ
                                НЕ БОЯТЬСЯ СЛОЖНЫХ ЗАДАЧ, СТАВИТЬ ПЕРЕД СОБОЙ
                                САМЫЕ АМБИЦИОЗНЫЕ И ТРУДНОДОСТИЖИМЫЕ ЦЕЛИ И, В
                                ИТОГЕ, ПОЛУЧАЕМ УДОВОЛЬСТВИЕ ОТ ИХ ДОСТИЖЕНИЙ, И
                                ВКЛАДА В РАЗВИТИЕ СВОЕГО СООБЩЕСТВА, ГОРОДА,
                                СТРАНЫ И МИРА В ЦЕЛОМ!
                            </BossText>
                            <BossText>
                                ПРИ ЭТОМ, НЕ ОГРАНИЧИВАЯ ПРЕДЕЛЫ ИХ
                                САМОРЕАЛИЗАЦИИ - НАШИ СТУДЕНТЫ ПРОЯВЛЯЮТ СЕБЯ В
                                УЧЕБНОМ ПРОЦЕССЕ, НАУЧНОЙ РАБОТЕ, В ОБЩЕСТВЕННОЙ
                                ДЕЯТЕЛЬНОСТИ, КУЛЬТУРЕ И СПОРТЕ. И ПЕРСПЕКТИВЫ
                                ИХ РАЗВИТИЯ КАК ЛИЧНОСТИ, ГРАЖДАНИНА СВОЕЙ
                                РОДИНЫ И МИРА, ИСТИННОГО ПРОФЕССИОНАЛА И
                                ЧЕЛОВЕКА С БОЛЬШОЙ БУКВЫ – НАША ГЛАВНАЯ ЗАДАЧА.
                            </BossText>
                            <BossText>
                                А, ТЕПЕРЬ ОКОНЧАТЕЛЬНО РАСПАХНИТЕ ДВЕРИ НАШЕМУ
                                ВЗАИМОДЕЙСТВИЮ И ЛЮБОМУ ВОЗМОЖНОМУ ВАРИАНТУ
                                СОТРУДНИЧЕСТВА! В КАЧЕСТВЕ СТУДЕНТА,
                                РАБОТОДАТЕЛЯ, РОДИТЕЛЯ, ПОПЕЧИТЕЛЯ, НАСТАВНИКА,
                                ПРЕПОДАВАТЕЛЯ ИЛИ В ЛЮБОМ ДРУГОМ, ВОЗМОЖНОМ
                                ВАРИАНТЕ! ПОЗВОЛЬТЕ СЕБЕ ОЩУТИТЬ ИСХОДЯЩИЙ ОТ
                                НАС ВЕТЕР ПЕРЕМЕН И ЕГО СИЛУ.
                            </BossText>
                            <BossText>
                                С НЕТЕРПЕНИЕМ ЖДЕМ ВАШЕГО ОТКЛИКА И ЛЮБОГО
                                ВОЗМОЖНОГО ВАРИАНТА ВЗАИМОДЕЙСТВИЯ! ВСЕГДА
                                ОТКРЫТЫ К ДИАЛОГУ И ОТВЕТИМ НА ЛЮБЫЕ ВОПРОСЫ!
                                ВАШЕ И НАШЕ БУДУЩЕЕ, БУДУЩЕЕ ВАШИХ ДЕТЕЙ И НАШЕЙ
                                СТРАНЫ, ЕЕ РАЗВИТИЕ И РЕПУТАЦИЯ – В НАШИХ,
                                ПРОФЕССИОНАЛЬНЫХ И СИЛЬНЫХ РУКАХ!
                            </BossText>
                        </View>
                    </View>

                    <StatusBar style="light" />
                </View>
            </ScrollView>
        </>
    );
}

export default App;
