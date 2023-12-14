import './Page5Prescription.css';

const Page5Prescription = () => {
    return (
        <div className="page5__main__wrap">
            <div className="page5__head__logo">
                <svg className='page5__lines__main' xmlns="http://www.w3.org/2000/svg" width="98vw" height="30vw" viewBox="0 0 1412 351" fill="none">
                    <path d="M227.259 79.4879C288.96 61.5193 356.817 47.07 427.608 35.6451C500.866 23.8222 577.903 15.2181 656.051 10.4164C732.999 5.6855 811.992 4.78353 889.295 8.70976C963.642 12.4857 1039.03 20.9129 1104.38 35.7689C1168.04 50.2446 1222.4 71.3437 1260.7 96.2098C1297.71 120.262 1319.89 148.312 1315.71 176.68C1312.22 200.37 1288.41 223.282 1254.43 242.603C1226.07 258.724 1188.93 272.191 1147.01 282.564C1103.22 293.396 1054.86 300.904 1005.03 305.989C951.685 311.418 896.807 314.089 841.842 314.867C784.053 315.68 726.109 314.434 668.72 311.622C612.043 308.845 555.832 304.503 500.577 298.791C448.078 293.361 396.335 286.685 346.104 278.54C302.695 271.51 260.221 263.322 220.391 253.471C161.313 238.863 102.302 219.391 74.2079 193.375C59.7163 179.952 55.8044 165.078 63.9615 150.806C73.141 134.773 94.9007 120.209 121.483 107.785C172.204 84.0685 239.217 65.3747 307.652 50.6072C374.02 36.2818 445.345 25.7499 518.87 18.9409C592.595 12.1143 668.409 9.10769 744.068 9.84165C819.637 10.5756 894.896 15.0766 967.532 23.4066C1039.72 31.6923 1109.05 43.7982 1172.77 59.6623C1241.18 76.7024 1303.26 98.5177 1346.18 125.957C1387.54 152.388 1408.44 184.293 1381.92 214.545C1355.07 245.168 1287.61 267.107 1220.89 283.882C1150.3 301.62 1073.44 315.159 993.537 324.709C913.5 334.268 830.617 339.945 747.246 342.103C663.341 344.269 578.725 342.996 495.421 338.389C421.74 334.312 348.171 328.007 278.024 318.042C215.19 309.119 152.978 297.057 102.747 279.319C52.6705 261.633 17.375 237.757 16.108 210.61C14.5966 178.245 59.6274 148.71 113.993 125.939C157.557 107.697 209.167 92.8848 264.533 80.8409C312.697 70.3621 363.596 61.9614 415.895 55.347C470.416 48.4495 526.493 43.4533 583.171 40.4114C640.248 37.3429 698.081 36.2641 755.625 37.3429C811.747 38.3952 867.669 41.5698 921.968 47.353C974.089 52.8975 1024.68 60.8384 1071.26 71.7062C1116.85 82.3353 1158.12 95.7411 1192.42 111.764C1228.07 128.424 1255.41 147.817 1273.66 168.447C1287.39 183.993 1299.06 201.13 1291.57 217.666C1283.66 235.104 1253.7 249.058 1223.67 261.43C1166.88 284.819 1095.91 303.53 1018.9 314.584C1011.52 315.645 1014.7 320.367 1022.16 319.297C1104.18 307.527 1178.86 288.931 1239.25 263.782C1269.63 251.128 1299.17 236.555 1306.86 218.834C1314.33 201.652 1304.02 184.196 1290.06 167.961C1271.43 146.313 1243.52 126.107 1206.73 108.501C1171.77 91.7707 1129.07 77.7017 1082.15 66.5774C1034.17 55.1966 981.779 46.8401 927.88 41.0746C871.958 35.0968 814.192 31.8427 756.403 30.7638C696.836 29.6496 637.114 30.9318 578.036 34.1772C519.625 37.3871 461.859 42.6221 405.782 49.8998C351.994 56.8768 299.562 65.7285 250.197 76.7467C192.297 89.6661 138.198 105.734 93.6338 125.382C39.6458 149.196 -3.25116 179.757 0.193932 212.723C3.12782 240.72 39.4458 265.55 91.2778 283.882C143.221 302.248 207.011 314.752 271.979 324.072C343.637 334.339 418.962 340.829 494.287 345.021C579.881 349.778 666.608 351.255 752.869 348.983C838.93 346.71 924.502 340.794 1006.92 330.634C1088.69 320.544 1167.55 306.325 1239.36 287.737C1307.69 270.051 1373.9 246.936 1400.44 215.279C1426.62 184.055 1405.7 150.797 1363.72 123.41C1320.09 94.9541 1256.63 72.1661 1186.42 54.3919C1120.85 37.7939 1048.99 25.1132 974.422 16.4561C899.964 7.80779 822.549 3.14761 745.023 2.39596C667.075 1.63548 588.772 4.83659 512.868 11.9374C437.232 19.0117 363.774 30.0476 295.65 44.9124C261.754 52.3139 229.17 60.688 198.342 69.9819C164.847 80.0716 132.597 91.0986 105.614 104C78.3198 117.052 55.7377 132.182 46.1359 148.86C37.5343 163.822 40.4237 179.465 54.6042 193.738C82.4317 221.734 143.199 242.762 205.61 258.573C246.596 268.955 290.515 277.417 335.346 284.81C386.445 293.237 439.121 300.126 492.598 305.723C550.187 311.745 608.798 316.246 667.898 319.103C726.798 321.959 786.298 323.162 845.62 322.18C902.542 321.234 959.575 318.307 1014.7 312.462C1065.93 307.032 1115.89 298.994 1160.59 287.569C1204.62 276.312 1242.98 261.81 1272.39 244.557C1307.42 223.998 1330.71 199.733 1333.27 174.796C1336.25 145.65 1312.71 116.725 1274.3 92.1332C1234.49 66.6304 1178.35 44.9301 1112.74 30.0741C1045.26 14.8025 967.999 6.31335 891.362 2.40481C811.48 -1.67175 730.443 -0.371847 651.095 4.81891C571.257 10.0627 493.576 19.3831 419.451 32.2406C350.327 44.2315 284.625 59.5473 224.859 77.8432C222.458 78.5771 224.747 80.2131 227.259 79.4879Z" fill="#312F2F" />
                </svg>
                <svg className='page5__lines__adapt' xmlns="http://www.w3.org/2000/svg" width="98vw" height="24vw" viewBox="0 0 1412 351" fill="none">
                    <path d="M227.259 79.4879C288.96 61.5193 356.817 47.07 427.608 35.6451C500.866 23.8222 577.903 15.2181 656.051 10.4164C732.999 5.6855 811.992 4.78353 889.295 8.70976C963.642 12.4857 1039.03 20.9129 1104.38 35.7689C1168.04 50.2446 1222.4 71.3437 1260.7 96.2098C1297.71 120.262 1319.89 148.312 1315.71 176.68C1312.22 200.37 1288.41 223.282 1254.43 242.603C1226.07 258.724 1188.93 272.191 1147.01 282.564C1103.22 293.396 1054.86 300.904 1005.03 305.989C951.685 311.418 896.807 314.089 841.842 314.867C784.053 315.68 726.109 314.434 668.72 311.622C612.043 308.845 555.832 304.503 500.577 298.791C448.078 293.361 396.335 286.685 346.104 278.54C302.695 271.51 260.221 263.322 220.391 253.471C161.313 238.863 102.302 219.391 74.2079 193.375C59.7163 179.952 55.8044 165.078 63.9615 150.806C73.141 134.773 94.9007 120.209 121.483 107.785C172.204 84.0685 239.217 65.3747 307.652 50.6072C374.02 36.2818 445.345 25.7499 518.87 18.9409C592.595 12.1143 668.409 9.10769 744.068 9.84165C819.637 10.5756 894.896 15.0766 967.532 23.4066C1039.72 31.6923 1109.05 43.7982 1172.77 59.6623C1241.18 76.7024 1303.26 98.5177 1346.18 125.957C1387.54 152.388 1408.44 184.293 1381.92 214.545C1355.07 245.168 1287.61 267.107 1220.89 283.882C1150.3 301.62 1073.44 315.159 993.537 324.709C913.5 334.268 830.617 339.945 747.246 342.103C663.341 344.269 578.725 342.996 495.421 338.389C421.74 334.312 348.171 328.007 278.024 318.042C215.19 309.119 152.978 297.057 102.747 279.319C52.6705 261.633 17.375 237.757 16.108 210.61C14.5966 178.245 59.6274 148.71 113.993 125.939C157.557 107.697 209.167 92.8848 264.533 80.8409C312.697 70.3621 363.596 61.9614 415.895 55.347C470.416 48.4495 526.493 43.4533 583.171 40.4114C640.248 37.3429 698.081 36.2641 755.625 37.3429C811.747 38.3952 867.669 41.5698 921.968 47.353C974.089 52.8975 1024.68 60.8384 1071.26 71.7062C1116.85 82.3353 1158.12 95.7411 1192.42 111.764C1228.07 128.424 1255.41 147.817 1273.66 168.447C1287.39 183.993 1299.06 201.13 1291.57 217.666C1283.66 235.104 1253.7 249.058 1223.67 261.43C1166.88 284.819 1095.91 303.53 1018.9 314.584C1011.52 315.645 1014.7 320.367 1022.16 319.297C1104.18 307.527 1178.86 288.931 1239.25 263.782C1269.63 251.128 1299.17 236.555 1306.86 218.834C1314.33 201.652 1304.02 184.196 1290.06 167.961C1271.43 146.313 1243.52 126.107 1206.73 108.501C1171.77 91.7707 1129.07 77.7017 1082.15 66.5774C1034.17 55.1966 981.779 46.8401 927.88 41.0746C871.958 35.0968 814.192 31.8427 756.403 30.7638C696.836 29.6496 637.114 30.9318 578.036 34.1772C519.625 37.3871 461.859 42.6221 405.782 49.8998C351.994 56.8768 299.562 65.7285 250.197 76.7467C192.297 89.6661 138.198 105.734 93.6338 125.382C39.6458 149.196 -3.25116 179.757 0.193932 212.723C3.12782 240.72 39.4458 265.55 91.2778 283.882C143.221 302.248 207.011 314.752 271.979 324.072C343.637 334.339 418.962 340.829 494.287 345.021C579.881 349.778 666.608 351.255 752.869 348.983C838.93 346.71 924.502 340.794 1006.92 330.634C1088.69 320.544 1167.55 306.325 1239.36 287.737C1307.69 270.051 1373.9 246.936 1400.44 215.279C1426.62 184.055 1405.7 150.797 1363.72 123.41C1320.09 94.9541 1256.63 72.1661 1186.42 54.3919C1120.85 37.7939 1048.99 25.1132 974.422 16.4561C899.964 7.80779 822.549 3.14761 745.023 2.39596C667.075 1.63548 588.772 4.83659 512.868 11.9374C437.232 19.0117 363.774 30.0476 295.65 44.9124C261.754 52.3139 229.17 60.688 198.342 69.9819C164.847 80.0716 132.597 91.0986 105.614 104C78.3198 117.052 55.7377 132.182 46.1359 148.86C37.5343 163.822 40.4237 179.465 54.6042 193.738C82.4317 221.734 143.199 242.762 205.61 258.573C246.596 268.955 290.515 277.417 335.346 284.81C386.445 293.237 439.121 300.126 492.598 305.723C550.187 311.745 608.798 316.246 667.898 319.103C726.798 321.959 786.298 323.162 845.62 322.18C902.542 321.234 959.575 318.307 1014.7 312.462C1065.93 307.032 1115.89 298.994 1160.59 287.569C1204.62 276.312 1242.98 261.81 1272.39 244.557C1307.42 223.998 1330.71 199.733 1333.27 174.796C1336.25 145.65 1312.71 116.725 1274.3 92.1332C1234.49 66.6304 1178.35 44.9301 1112.74 30.0741C1045.26 14.8025 967.999 6.31335 891.362 2.40481C811.48 -1.67175 730.443 -0.371847 651.095 4.81891C571.257 10.0627 493.576 19.3831 419.451 32.2406C350.327 44.2315 284.625 59.5473 224.859 77.8432C222.458 78.5771 224.747 80.2131 227.259 79.4879Z" fill="#312F2F" />
                </svg>
                <div className="page5__head__text">
                    <div className="page5__head__flex">
                        <div className="page5__text__white">
                            Ознайомча консультація до 1 год –
                        </div>
                        <div className="page5__text__yellow">
                            &nbsp;безкоштовно.
                        </div>
                    </div>
                    <div className="page5__text__bottom">Подальші консультації, при заключенні контракту<br className='page5__br__adapt'/>не рахуються по окремій вартості.</div>
                </div>
            </div>
        </div>
    )
}

export default Page5Prescription;