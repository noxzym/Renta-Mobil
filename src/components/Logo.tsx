interface props {
    textColor?: string;
    dotColor?: string;
}

export default function Logo({ textColor = "#1877F2", dotColor = "#FFB534" }: props) {
    return (
        <svg width="150" height="48" viewBox="0 0 150 48">
            <path
                d="M2.77344 16.1514C2.77344 15.5915 2.78646 15.0446 2.8125 14.5107C2.85156 13.9769 2.96224 13.5016 3.14453 13.085C3.32682 12.6683 3.61328 12.3363 4.00391 12.0889C4.40755 11.8285 4.97396 11.6982 5.70312 11.6982H12.1484C13.75 11.7764 15.1823 12.1149 16.4453 12.7139C16.9792 12.9743 17.5 13.2998 18.0078 13.6904C18.5286 14.068 18.9909 14.5433 19.3945 15.1162C19.7982 15.6761 20.1237 16.3402 20.3711 17.1084C20.6185 17.8766 20.7422 18.7686 20.7422 19.7842C20.7422 19.9925 20.7227 20.2725 20.6836 20.624C20.6445 20.9626 20.5599 21.3402 20.4297 21.7568C20.2995 22.1605 20.1237 22.5837 19.9023 23.0264C19.681 23.4691 19.388 23.8923 19.0234 24.2959C18.6589 24.6995 18.2096 25.0706 17.6758 25.4092C17.1549 25.7477 16.5365 26.0212 15.8203 26.2295C16.276 26.4118 16.7383 26.6527 17.207 26.9521C17.6758 27.2386 18.099 27.6097 18.4766 28.0654C18.8542 28.5212 19.1602 29.068 19.3945 29.7061C19.6419 30.3441 19.7656 31.0863 19.7656 31.9326V34.7061C19.7656 34.8623 19.8047 34.9925 19.8828 35.0967C19.9609 35.2008 20.0391 35.292 20.1172 35.3701C20.4297 35.6826 20.612 35.9561 20.6641 36.1904C20.7161 36.4118 20.7422 36.5941 20.7422 36.7373C20.7422 37.193 20.651 37.5771 20.4688 37.8896C20.2865 38.2021 20.0456 38.4561 19.7461 38.6514C19.4596 38.8467 19.1276 38.9834 18.75 39.0615C18.3854 39.1527 18.0078 39.1982 17.6172 39.1982C17.1875 39.1982 16.7513 39.1331 16.3086 39.0029C15.8659 38.8597 15.4622 38.6579 15.0977 38.3975C14.7331 38.137 14.4336 37.8115 14.1992 37.4209C13.9779 37.0303 13.8672 36.5811 13.8672 36.0732V31.9326C13.8672 31.3597 13.8281 30.8324 13.75 30.3506C13.6719 29.8688 13.5221 29.4521 13.3008 29.1006C13.0794 28.749 12.7734 28.4756 12.3828 28.2803C11.9922 28.085 11.4844 27.9873 10.8594 27.9873H8.67188V34.5107C8.67188 35.0837 8.65234 35.6436 8.61328 36.1904C8.58724 36.7373 8.48307 37.2256 8.30078 37.6553C8.11849 38.0719 7.82552 38.4105 7.42188 38.6709C7.01823 38.9183 6.44531 39.042 5.70312 39.042C4.97396 39.042 4.40755 38.9183 4.00391 38.6709C3.61328 38.4105 3.32682 38.0719 3.14453 37.6553C2.96224 37.2256 2.85156 36.7373 2.8125 36.1904C2.78646 35.6436 2.77344 35.0837 2.77344 34.5107V16.1514ZM11.3281 23.6123C11.9792 23.5863 12.5651 23.43 13.0859 23.1436C13.3073 23.0264 13.5221 22.8766 13.7305 22.6943C13.9388 22.512 14.1276 22.2842 14.2969 22.0107C14.4661 21.7373 14.5964 21.4183 14.6875 21.0537C14.7917 20.6891 14.8438 20.266 14.8438 19.7842C14.8438 19.3545 14.7917 18.9769 14.6875 18.6514C14.5964 18.3128 14.4727 18.0199 14.3164 17.7725C14.1602 17.5251 13.9779 17.3167 13.7695 17.1475C13.5742 16.9782 13.3724 16.8415 13.1641 16.7373C12.6693 16.4899 12.1094 16.3467 11.4844 16.3076H8.67188V23.6123H11.3281ZM40.5859 27.9092C40.5859 28.1175 40.5729 28.3649 40.5469 28.6514C40.5208 28.9248 40.4167 29.1917 40.2344 29.4521C40.0651 29.6995 39.7917 29.9144 39.4141 30.0967C39.0365 30.279 38.5026 30.3701 37.8125 30.3701H30.0391V32.2451C30.0391 32.5576 30.0781 32.8831 30.1562 33.2217C30.2344 33.5602 30.3646 33.8727 30.5469 34.1592C30.7422 34.4456 30.9961 34.68 31.3086 34.8623C31.6211 35.0446 32.0052 35.1357 32.4609 35.1357C32.9818 35.1357 33.3789 35.0771 33.6523 34.96C33.9388 34.8298 34.1602 34.6735 34.3164 34.4912C34.4857 34.3089 34.6354 34.1136 34.7656 33.9053C34.8958 33.6969 35.0651 33.5016 35.2734 33.3193C35.4948 33.137 35.7943 32.9873 36.1719 32.8701C36.5625 32.7399 37.0964 32.6748 37.7734 32.6748C38.099 32.6748 38.4115 32.7008 38.7109 32.7529C39.0234 32.805 39.2969 32.9027 39.5312 33.0459C39.7656 33.1891 39.9544 33.391 40.0977 33.6514C40.2409 33.8988 40.3125 34.2243 40.3125 34.6279C40.3125 35.4743 40.0456 36.1839 39.5117 36.7568C38.9779 37.3167 38.3073 37.766 37.5 38.1045C36.6927 38.443 35.8138 38.6839 34.8633 38.8271C33.9258 38.9704 33.0469 39.042 32.2266 39.042C31.1458 39.029 30.1172 38.8923 29.1406 38.6318C28.1641 38.3714 27.2982 37.9548 26.543 37.3818C25.8008 36.8089 25.2083 36.0602 24.7656 35.1357C24.3229 34.2113 24.1016 33.0785 24.1016 31.7373V27.167C24.1016 25.93 24.2448 24.8818 24.5312 24.0225C24.8307 23.1631 25.2148 22.4469 25.6836 21.874C26.1523 21.3011 26.6797 20.8584 27.2656 20.5459C27.8516 20.2204 28.444 19.9795 29.043 19.8232C29.6419 19.667 30.2083 19.5693 30.7422 19.5303C31.2891 19.4912 31.7578 19.4717 32.1484 19.4717C33.4635 19.4717 34.5833 19.5889 35.5078 19.8232C36.4453 20.0576 37.2266 20.3636 37.8516 20.7412C38.4766 21.1188 38.9714 21.555 39.3359 22.0498C39.7005 22.5446 39.974 23.0589 40.1562 23.5928C40.3385 24.1136 40.4557 24.6475 40.5078 25.1943C40.5599 25.7282 40.5859 26.2295 40.5859 26.6982V27.9092ZM30.0391 27.4404H34.9219C34.9219 26.8285 34.9023 26.2881 34.8633 25.8193C34.8372 25.3376 34.7396 24.9339 34.5703 24.6084C34.4141 24.2829 34.1602 24.0355 33.8086 23.8662C33.4701 23.6969 32.9818 23.6123 32.3438 23.6123C31.8099 23.6123 31.3867 23.6969 31.0742 23.8662C30.7747 24.0355 30.5469 24.2503 30.3906 24.5107C30.2344 24.7581 30.1367 25.0251 30.0977 25.3115C30.0586 25.598 30.0391 25.8519 30.0391 26.0732V27.4404ZM61.0938 34.5889C61.0938 35.1488 61.0612 35.6956 60.9961 36.2295C60.931 36.7633 60.7878 37.2386 60.5664 37.6553C60.3581 38.0719 60.0521 38.4105 59.6484 38.6709C59.2578 38.9183 58.724 39.042 58.0469 39.042C57.3828 39.042 56.8555 38.9183 56.4648 38.6709C56.0742 38.4105 55.7747 38.0719 55.5664 37.6553C55.3581 37.2386 55.2214 36.7633 55.1562 36.2295C55.1042 35.6956 55.0781 35.1488 55.0781 34.5889V26.9717C55.0781 26.6071 55.0586 26.249 55.0195 25.8975C54.9935 25.5459 54.9219 25.2399 54.8047 24.9795C54.6875 24.7061 54.5117 24.4912 54.2773 24.335C54.056 24.1657 53.75 24.0811 53.3594 24.0811C52.8255 24.0811 52.3958 24.2568 52.0703 24.6084C51.7448 24.96 51.4844 25.4417 51.2891 26.0537C51.1068 26.6657 50.9831 27.3883 50.918 28.2217C50.8529 29.042 50.8203 29.9274 50.8203 30.8779V34.5889C50.8203 35.1488 50.7878 35.6956 50.7227 36.2295C50.6576 36.7633 50.5143 37.2386 50.293 37.6553C50.0846 38.0719 49.7786 38.4105 49.375 38.6709C48.9844 38.9183 48.4505 39.042 47.7734 39.042C47.1094 39.042 46.582 38.9183 46.1914 38.6709C45.8008 38.4105 45.5013 38.0719 45.293 37.6553C45.0846 37.2386 44.9479 36.7633 44.8828 36.2295C44.8307 35.6956 44.8047 35.1488 44.8047 34.5889V23.9248C44.8047 23.3649 44.8242 22.8245 44.8633 22.3037C44.9023 21.7699 45.0195 21.3011 45.2148 20.8975C45.4102 20.4808 45.7031 20.1488 46.0938 19.9014C46.4974 19.641 47.0573 19.5107 47.7734 19.5107C48.4896 19.5107 49.0495 19.6344 49.4531 19.8818C49.8568 20.1162 50.1562 20.4027 50.3516 20.7412C50.5599 21.0798 50.6901 21.4378 50.7422 21.8154C50.7943 22.193 50.8203 22.5186 50.8203 22.792C50.9245 22.4144 51.0872 22.0303 51.3086 21.6396C51.5299 21.249 51.8099 20.8975 52.1484 20.585C52.5 20.2725 52.9167 20.0186 53.3984 19.8232C53.8802 19.6149 54.4401 19.5107 55.0781 19.5107C55.7943 19.5107 56.5104 19.6279 57.2266 19.8623C57.9427 20.0967 58.5872 20.4873 59.1602 21.0342C59.7331 21.5811 60.1953 22.2972 60.5469 23.1826C60.9115 24.068 61.0938 25.1618 61.0938 26.4639V34.5889ZM68.3984 19.5107V16.0732C68.3984 15.5264 68.4245 14.9925 68.4766 14.4717C68.5417 13.9508 68.6784 13.4886 68.8867 13.085C69.0951 12.6683 69.3945 12.3363 69.7852 12.0889C70.1758 11.8285 70.7031 11.6982 71.3672 11.6982C72.0182 11.6982 72.5391 11.8285 72.9297 12.0889C73.3203 12.3363 73.6133 12.6683 73.8086 13.085C74.0169 13.4886 74.1471 13.9508 74.1992 14.4717C74.2643 14.9925 74.2969 15.5264 74.2969 16.0732V19.5107H75.8984C76.237 19.5107 76.5755 19.5303 76.9141 19.5693C77.2526 19.5954 77.5521 19.6865 77.8125 19.8428C78.0859 19.999 78.3008 20.2334 78.457 20.5459C78.6263 20.8584 78.7109 21.2946 78.7109 21.8545C78.7109 22.3883 78.6263 22.8115 78.457 23.124C78.3008 23.4365 78.0859 23.6709 77.8125 23.8271C77.5521 23.9834 77.2526 24.0876 76.9141 24.1396C76.5755 24.1787 76.237 24.1982 75.8984 24.1982H74.2969V31.0342C74.2969 31.2946 74.3034 31.5745 74.3164 31.874C74.3424 32.1605 74.4141 32.4274 74.5312 32.6748C74.6484 32.9222 74.8242 33.1305 75.0586 33.2998C75.293 33.4561 75.625 33.5342 76.0547 33.5342C76.5234 33.5342 76.9206 33.5732 77.2461 33.6514C77.5846 33.7165 77.8581 33.8402 78.0664 34.0225C78.2878 34.2048 78.4505 34.4587 78.5547 34.7842C78.6589 35.1097 78.7109 35.5264 78.7109 36.0342C78.7109 36.555 78.5872 37.0042 78.3398 37.3818C78.1055 37.7594 77.7865 38.0719 77.3828 38.3193C76.9792 38.5667 76.5104 38.749 75.9766 38.8662C75.4427 38.9834 74.8828 39.042 74.2969 39.042C73.3724 39.042 72.5781 38.9443 71.9141 38.749C71.263 38.5537 70.7161 38.2803 70.2734 37.9287C69.8438 37.5641 69.4987 37.1344 69.2383 36.6396C68.9909 36.1318 68.8021 35.5654 68.6719 34.9404C68.5547 34.3154 68.4766 33.6449 68.4375 32.9287C68.4115 32.1995 68.3984 31.4378 68.3984 30.6436V24.1982H67.3047C66.9661 24.1982 66.6276 24.1787 66.2891 24.1396C65.9635 24.0876 65.6706 23.9834 65.4102 23.8271C65.1497 23.6709 64.9349 23.4365 64.7656 23.124C64.6094 22.8115 64.5312 22.3883 64.5312 21.8545C64.5312 21.2946 64.6094 20.8584 64.7656 20.5459C64.9349 20.2334 65.1497 19.999 65.4102 19.8428C65.6706 19.6865 65.9635 19.5954 66.2891 19.5693C66.6276 19.5303 66.9661 19.5107 67.3047 19.5107H68.3984Z"
                fill={textColor}
            />
            <circle cx="99" cy="23.542" r="10" fill={dotColor} />
            <path
                d="M120.281 16.1904C120.281 15.6305 120.307 15.0837 120.359 14.5498C120.424 14.016 120.561 13.5407 120.77 13.124C120.991 12.6943 121.316 12.3493 121.746 12.0889C122.176 11.8285 122.768 11.6982 123.523 11.6982C124.279 11.6982 124.871 11.8285 125.301 12.0889C125.73 12.3493 126.049 12.6943 126.258 13.124C126.479 13.5407 126.616 14.016 126.668 14.5498C126.733 15.0837 126.766 15.6305 126.766 16.1904V34.5498C126.766 35.1227 126.74 35.6761 126.688 36.21C126.635 36.7438 126.499 37.2256 126.277 37.6553C126.069 38.0719 125.743 38.4105 125.301 38.6709C124.871 38.9183 124.279 39.042 123.523 39.042C122.768 39.042 122.176 38.9183 121.746 38.6709C121.316 38.4105 120.991 38.0719 120.77 37.6553C120.561 37.2256 120.424 36.7438 120.359 36.21C120.307 35.6761 120.281 35.1227 120.281 34.5498V16.1904ZM147.781 34.6279C147.781 35.1748 147.762 35.7152 147.723 36.249C147.684 36.7699 147.566 37.2386 147.371 37.6553C147.176 38.0719 146.883 38.4105 146.492 38.6709C146.102 38.9183 145.555 39.042 144.852 39.042C144.135 39.042 143.576 38.9248 143.172 38.6904C142.768 38.443 142.469 38.1501 142.273 37.8115C142.078 37.46 141.954 37.0954 141.902 36.7178C141.863 36.3402 141.844 36.0212 141.844 35.7607C141.727 36.1383 141.557 36.5225 141.336 36.9131C141.128 37.3037 140.854 37.6553 140.516 37.9678C140.177 38.2803 139.767 38.5407 139.285 38.749C138.816 38.9443 138.263 39.042 137.625 39.042C136.909 39.042 136.193 38.9248 135.477 38.6904C134.76 38.4561 134.116 38.0654 133.543 37.5186C132.97 36.9717 132.501 36.262 132.137 35.3896C131.785 34.5042 131.609 33.417 131.609 32.1279V26.4639C131.609 25.1618 131.785 24.0745 132.137 23.2021C132.501 22.3167 132.97 21.6071 133.543 21.0732C134.116 20.5264 134.76 20.1357 135.477 19.9014C136.193 19.667 136.909 19.5498 137.625 19.5498C138.263 19.5498 138.816 19.6475 139.285 19.8428C139.767 20.0381 140.177 20.292 140.516 20.6045C140.854 20.917 141.128 21.2686 141.336 21.6592C141.557 22.0498 141.727 22.4404 141.844 22.8311V16.1514C141.844 15.5915 141.87 15.0446 141.922 14.5107C141.987 13.9639 142.117 13.4886 142.312 13.085C142.521 12.6683 142.82 12.3363 143.211 12.0889C143.615 11.8285 144.161 11.6982 144.852 11.6982C145.503 11.6982 146.023 11.8285 146.414 12.0889C146.805 12.3363 147.098 12.6683 147.293 13.085C147.501 13.4886 147.632 13.9639 147.684 14.5107C147.749 15.0446 147.781 15.5915 147.781 16.1514V34.6279ZM137.625 31.6201C137.625 31.9717 137.638 32.3167 137.664 32.6553C137.69 32.9938 137.762 33.2998 137.879 33.5732C137.996 33.8467 138.165 34.068 138.387 34.2373C138.621 34.3936 138.94 34.4717 139.344 34.4717C139.852 34.4717 140.262 34.361 140.574 34.1396C140.9 33.9053 141.154 33.5537 141.336 33.085C141.518 32.6032 141.642 32.0042 141.707 31.2881C141.785 30.5589 141.831 29.693 141.844 28.6904C141.844 28.2868 141.805 27.8245 141.727 27.3037C141.661 26.7699 141.538 26.2686 141.355 25.7998C141.173 25.3311 140.919 24.9339 140.594 24.6084C140.268 24.2829 139.852 24.1201 139.344 24.1201C138.94 24.1201 138.621 24.2048 138.387 24.374C138.165 24.5303 137.996 24.7386 137.879 24.999C137.762 25.2594 137.69 25.5589 137.664 25.8975C137.638 26.223 137.625 26.555 137.625 26.8936V31.6201Z"
                fill={textColor}
            />
        </svg>
    );
}
