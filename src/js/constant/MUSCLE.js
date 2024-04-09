export const MUSCLE_CATEGORY = {
    LUMBAR_PELVIC_COMPLEX: 'LUMBAR_PELVIC_COMPLEX',
    KNEE: 'KNEE',
    ANKLES_TOES: 'ANKLES_TOES',
    NECK: 'NECK',
    SHOULDER: 'SHOULDER',
    ELBOWS_WRISTS: 'ELBOWS_WRISTS',
    TRUNK: 'TRUNK',
}

export const MUSCLE_MAP = {
    [MUSCLE_CATEGORY.LUMBAR_PELVIC_COMPLEX]: {
        [LUMBAR_PELVIC_COMPLEX.ILIOPSOAS]: [
            [LUMBAR_PELVIC_COMPLEX.ADDUCTORS],
            [OTHER.DIAPHRAGM],
            [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MAXIMUS],
            "반대쪽 목 굴곡근",
            [KNEE.HAMSTRING],
            "요방형근",
            [TRUNK.ERECTOR_SPINAE],
        ],
        [LUMBAR_PELVIC_COMPLEX.ILIOPSOAS]: [
            [LUMBAR_PELVIC_COMPLEX.ILIOPSOAS],
            "이상근",
            "대퇴근막장근",
            [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MEDIUS],
            [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MAXIMUS],
        ],
        [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MEDIUS]: [
            "반대편 복직근",
            [LUMBAR_PELVIC_COMPLEX.ADDUCTORS],
            "비골근",
            "요방형근",
        ],
        [LUMBAR_PELVIC_COMPLEX.RECTUS_FEMORIS]: [
            [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MAXIMUS],
            [KNEE.HAMSTRING],
            [OTHER.DIAPHRAGM],
            "요방형근",
            [TRUNK.ERECTOR_SPINAE],
        ],
        [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MAXIMUS]: [
            [TRUNK.ERECTOR_SPINAE],
            [SHOULDER.PECTORALIS_MAJOR],
            [LUMBAR_PELVIC_COMPLEX.ILIOPSOAS],
            [LUMBAR_PELVIC_COMPLEX.RECTUS_FEMORIS],
            "봉공근",
            "이상근",
            "내접근",
            "대퇴근막장근",
        ],
    },
    [MUSCLE_CATEGORY.KNEE]: {
    },
    [MUSCLE_CATEGORY.ANKLES_TOES]: {
    },
    [MUSCLE_CATEGORY.NECK]: {
    },
    [MUSCLE_CATEGORY.SHOULDER]: {
    },
    [MUSCLE_CATEGORY.ELBOWS_WRISTS]: {
    },
    [MUSCLE_CATEGORY.TRUNK]: {
    },
}

export const MUSCLE_TEXT = {
    [LUMBAR_PELVIC_COMPLEX.ILIOPSOAS]: "장요근",
    [LUMBAR_PELVIC_COMPLEX.ADDUCTORS]: "내전근",
    [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MEDIUS]: "중둔근",
    [LUMBAR_PELVIC_COMPLEX.RECTUS_FEMORIS]: "대퇴직근",
    [LUMBAR_PELVIC_COMPLEX.GLUTEUS_MAXIMUS]: "대둔근",
    [KNEE.HAMSTRING]: "햄스트링",
    [KNEE.RECTUS_FEMORIS]: "대퇴직근",
    [ANKLES_TOES.DORSI_FLEXOR]: "배측굴곡근",
    [ANKLES_TOES.PLANTAR_FLEXOR]: "족저굴곡근",
    [ANKLES_TOES.EVERTOR]: "외번근",
    [ANKLES_TOES.INVERTER]: "내번근",
    [ANKLES_TOES.FIRST_TOE_FLEXOR]: "엄지발가락 굴곡근",
    [ANKLES_TOES.FIRST_TOE_EXTENSOR]: "엄지발가락 신전근",
    [ANKLES_TOES.TWO_FIVE_TH_TOE_FLEXOR]: "나머지 발가락 굴곡",
    [ANKLES_TOES.TWO_FIVE_TH_TOE_EXTENSOR]: "나머지 발가락 신전",
    [NECK.STERNOLEIDOMASTOID]: "흉쇄유돌근",
    [NECK.CERVICAL_DEEP_FLEXOR]: "경추 심부굴곡근",
    [NECK.SCALENES]: "사각근",
    [NECK.CERVICAL_EXTENSOR]: "경추 신전근",
    [NECK.LEVATOR_SCAPULAE]: "견갑거근",
    [SHOULDER.UPPER_MIDDLE_LOWER_TRAP]: "상부, 중부, 하부 승모근",
    [SHOULDER.LATISSIMUS_DORSI]: "광배근",
    [SHOULDER.RHOMBOIDS]: "능형근",
    [SHOULDER.SUPRASPINATUS]: "극상근",
    [SHOULDER.INFRASPINATUS]: "극하근",
    [SHOULDER.SUBSCAPULARIS]: "견갑하근",
    [SHOULDER.PECTORALIS_MAJOR]: "대흉근",
    [SHOULDER.PECTORALIS_MINOR]: "소흉근",
    [SHOULDER.SERRATUS_ANTERIOR]: "전거근",
    [ELBOWS_WRISTS.BICEPS_BRACHII]: "상완이두근",
    [ELBOWS_WRISTS.BRACHIALIS]: "상완근",
    [ELBOWS_WRISTS.PRONATOR]: "회내근",
    [ELBOWS_WRISTS.SUPINATOR]: "회외근",
    [ELBOWS_WRISTS.WRIST_FLEXOR]: "손목 굴곡근",
    [ELBOWS_WRISTS.WRIST_EXTENSOR]: "손목 신전근",
    [TRUNK.RECTUS_ABDOMINIS]: "복직근",
    [TRUNK.EXTERNAL_AB_OBLIQUE]: "외복사근",
    [TRUNK.INTERNAL_AB_OBLIQUE]: "내복사근",
    [TRUNK.TRANSVERSE_ABDOMINIS]: "복횡근",
    [TRUNK.ERECTOR_SPINAE]: "척추기립근",
    [OTHER.DIAPHRAGM]: "횡경막",
};

export const MUSCLE_LIST = [
    "ILIOPSOAS",  // 장요근
    "ADDUCTORS",  // 내전근
    "GLUTEUS_MEDIUS",  // 중둔근
    "RECTUS_FEMORIS",  // 대퇴직근
    "GLUTEUS_MAXIMUS",  // 대둔근
    "HAMSTRING",  // 햄스트링
    "DORSI_FLEXOR",  // 배측굴곡근
    "PLANTAR_FLEXOR",  // 족저굴곡근
    "EVERTOR",  // 외번근
    "INVERTER",  // 내번근
    "FIRST_TOE_FLEXOR",  // 엄지발가락 굴곡근
    "FIRST_TOE_EXTENSOR",  // 엄지발가락 신전근
    "TWO_FIVE_TH_TOE_FLEXOR",  // 나머지 발가락 굴곡
    "TWO_FIVE_TH_TOE_EXTENSOR",  // 나머지 발가락 신전
    "STERNOLEIDOMASTOID",  // 흉쇄유돌근
    "CERVICAL_DEEP_FLEXOR",  // 경추 심부굴곡근
    "SCALENES",  // 사각근
    "CERVICAL_EXTENSOR",  // 경추 신전근
    "LEVATOR_SCAPULAE",  // 견갑거근
    "UPPER_MIDDLE_LOWER_TRAP",  // 상부, 중부, 하부 승모근
    "LATISSIMUS_DORSI",  // 광배근
    "RHOMBOIDS",  // 능형근
    "SUPRASPINATUS",  // 극상근
    "INFRASPINATUS",  // 극하근
    "SUBSCAPULARIS",  // 견갑하근
    "PECTORALIS_MAJOR",  // 대흉근
    "PECTORALIS_MINOR",  // 소흉근
    "SERRATUS_ANTERIOR",  // 전거근
    "BICEPS_BRACHII",  // 상완이두근
    "BRACHIALIS",  // 상완근
    "PRONATOR",  // 회내근
    "SUPINATOR",  // 회외근
    "WRIST_FLEXOR",  // 손목 굴곡근
    "WRIST_EXTENSOR",  // 손목 신전근
    "RECTUS_ABDOMINIS",  // 복직근
    "EXTERNAL_AB_OBLIQUE",  // 외복사근
    "INTERNAL_AB_OBLIQUE", // 내복사근
    "TRANSVERSE_ABDOMINIS",  // 복횡근
    "ERECTOR_SPINAE",  // 척추기립근
];

export const LUMBAR_PELVIC_COMPLEX = {
    ILIOPSOAS: "ILIOPSOAS",  // 장요근
    ADDUCTORS: "ADDUCTORS",  // 내전근
    GLUTEUS_MEDIUS: "GLUTEUS_MEDIUS",  // 중둔근
    RECTUS_FEMORIS: "RECTUS_FEMORIS",  // 대퇴직근
    GLUTEUS_MAXIMUS: "GLUTEUS_MAXIMUS",  // 대둔근
};

export const KNEE = {
    HAMSTRING: "HAMSTRING",  // 햄스트링
    RECTUS_FEMORIS: "RECTUS_FEMORIS",  // 대퇴직근
};

export const ANKLES_TOES = {
    DORSI_FLEXOR: "DORSI_FLEXOR",  // 배측굴곡근
    PLANTAR_FLEXOR: "PLANTAR_FLEXOR",  // 족저굴곡근
    EVERTOR: "EVERTOR",  // 외번근
    INVERTER: "INVERTER",  // 내번근
    FIRST_TOE_FLEXOR: "1ST_TOE_FLEXOR",  // 엄지발가락 굴곡근
    FIRST_TOE_EXTENSOR: "1ST_TOE_EXTENSOR",  // 엄지발가락 신전근
    TWO_FIVE_TH_TOE_FLEXOR: "2-5TH_TOE_FLEXOR",  // 나머지 발가락 굴곡
    TWO_FIVE_TH_TOE_EXTENSOR: "2-5TH_TOE_EXTENSOR",  // 나머지 발가락 신전
}

export const NECK = {
    STERNOLEIDOMASTOID: "STERNOLEIDOMASTOID",  // 흉쇄유돌근
    CERVICAL_DEEP_FLEXOR: "CERVICAL_DEEP_FLEXOR",  // 경추 심부굴곡근
    SCALENES: "SCALENES",  // 사각근
    CERVICAL_EXTENSOR: "CERVICAL_EXTENSOR",  // 경추 신전근
    LEVATOR_SCAPULAE: "LEVATOR_SCAPULAE",  // 견갑거근
}

export const SHOULDER = {
    UPPER_MIDDLE_LOWER_TRAP: "UPPER_MIDDLE_LOWER_TRAP",  // 상부, 중부, 하부 승모근
    LATISSIMUS_DORSI: "LATISSIMUS_DORSI",  // 광배근
    RHOMBOIDS: "RHOMBOIDS",  // 능형근
    SUPRASPINATUS: "SUPRASPINATUS",  // 극상근
    INFRASPINATUS: "INFRASPINATUS",  // 극하근
    SUBSCAPULARIS: "SUBSCAPULARIS",  // 견갑하근
    PECTORALIS_MAJOR: "PECTORALIS_MAJOR",  // 대흉근
    PECTORALIS_MINOR: "PECTORALIS_MINOR",  // 소흉근
    SERRATUS_ANTERIOR: "SERRATUS_ANTERIOR",  // 전거근
}

export const ELBOWS_WRISTS = {
    BICEPS_BRACHII: "BICEPS_BRACHII",  // 상완이두근
    BRACHIALIS: "BRACHIALIS",  // 상완근
    PRONATOR: "PRONATOR",  // 회내근
    SUPINATOR: "SUPINATOR",  // 회외근
    WRIST_FLEXOR: "WRIST_FLEXOR",  // 손목 굴곡근
    WRIST_EXTENSOR: "WRIST_EXTENSOR",  // 손목 신전근
}

export const TRUNK = {
    RECTUS_ABDOMINIS: "RECTUS_ABDOMINIS",  // 복직근
    EXTERNAL_AB_OBLIQUE: "EXTERNAL_AB_OBLIQUE",  // 외복사근
    INTERNAL_AB_OBLIQUE: "INTERNAL_AB_OBLIQUE", // 내복사근
    TRANSVERSE_ABDOMINIS: "TRANSVERSE_ABDOMINIS",  // 복횡근
    ERECTOR_SPINAE: "ERECTOR_SPINAE",  // 척추기립근
}

export const OTHER = {
    DIAPHRAGM: "DIAPHRAGM" // 횡경막
}