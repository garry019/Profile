import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from 'three'


export default function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("./robo.glb")
    const { actions } = useAnimations(animations, group)

    //console.log(actions.animation_0)

    materials.Mat = new THREE.MeshBasicMaterial({ color: '#ff8243', wireframe: true })

    useEffect(() => {
        const action = actions.animation_0
        action.play()
    }, [actions.animation_0])

    return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group
          name="mixamorigHips"
          position={[0.24, 94.84, 1.66]}
          rotation={[-0.02, -0.81, -0.07]}
        >
          <group
            name="mixamorigSpine"
            position={[0, 9.92, -1.23]}
            rotation={[0.02, -0.03, 0.01]}
          >
            <group
              name="mixamorigSpine1"
              position={[0, 11.65, -1.42]}
              rotation={[0.02, -0.08, 0.01]}
            >
              <group
                name="mixamorigSpine2"
                position={[0, 13.36, -1.63]}
                rotation={[0.02, -0.08, 0.01]}
              >
                <group
                  name="mixamorigNeck"
                  position={[0, 15.03, 0.79]}
                  rotation={[-0.06, -0.05, -0.01]}
                >
                  <group
                    name="mixamorigHead"
                    position={[0, 10.32, 3.14]}
                    rotation={[-0.14, -0.3, 0.11]}
                  >
                    <group
                      name="mixamorigHeadTop_End"
                      position={[0, 18.47, 6.64]}
                    />
                    <group
                      name="mixamorigLeftEye"
                      position={[2.95, 7.68, 9.12]}
                    />
                    <group
                      name="mixamorigRightEye"
                      position={[-2.94, 7.68, 9.12]}
                    />
                    <mesh
                      name="OCULUSobj1"
                      geometry={nodes.OCULUSobj1.geometry}
                      material={materials.Mat}
                      position={[5.01, 18.36, 1.49]}
                      rotation={[0.13, 0.46, -0.11]}
                    >
                    </mesh>
                  </group>
                </group>
                <group
                  name="mixamorigLeftShoulder"
                  position={[6.11, 9.11, 0.71]}
                  rotation={[0.01, 0.03, -0.11]}
                >
                  <group
                    name="mixamorigLeftArm"
                    position={[12.65, -0.27, -2.6]}
                    rotation={[0.18, -0.24, -1.22]}
                  >
                    <group
                      name="mixamorigLeftForeArm"
                      position={[27.4, 0, 0]}
                      rotation={[0, -0.62, 0]}
                    >
                      <group
                        name="mixamorigLeftHand"
                        position={[27.61, 0, 0]}
                        rotation={[0.11, -0.01, 0.11]}
                      >
                        <group
                          name="mixamorigLeftHandMiddle1"
                          position={[12.78, 0, 0]}
                          rotation={[0.01, 0.04, -0.38]}
                        >
                          <group
                            name="mixamorigLeftHandMiddle2"
                            position={[3.61, 0, 0]}
                            rotation={[0.01, 0.05, -0.44]}
                          >
                            <group
                              name="mixamorigLeftHandMiddle3"
                              position={[3.46, 0, 0]}
                              rotation={[0, 0.01, -0.09]}
                            >
                              <group
                                name="mixamorigLeftHandMiddle4"
                                position={[3.68, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigLeftHandThumb1"
                          position={[3.79, -2.17, 3]}
                          rotation={[-0.06, 0.13, 0.29]}
                        >
                          <group
                            name="mixamorigLeftHandThumb2"
                            position={[3.68, -2.12, 2.12]}
                            rotation={[0.06, 0.37, 0.01]}
                          >
                            <group
                              name="mixamorigLeftHandThumb3"
                              position={[3.39, -1.96, 1.96]}
                              rotation={[-0.03, -0.01, 0.05]}
                            >
                              <group
                                name="mixamorigLeftHandThumb4"
                                position={[2.68, -1.55, 1.55]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigLeftHandIndex1"
                          position={[12.27, -0.23, 2.82]}
                          rotation={[0, 0, -0.07]}
                        >
                          <group
                            name="mixamorigLeftHandIndex2"
                            position={[3.89, 0, 0]}
                            rotation={[0.02, 0.07, -0.64]}
                          >
                            <group
                              name="mixamorigLeftHandIndex3"
                              position={[3.42, 0, 0]}
                              rotation={[0, 0.02, -0.13]}
                            >
                              <group
                                name="mixamorigLeftHandIndex4"
                                position={[3.08, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigLeftHandRing1"
                          position={[12.15, 0.01, -2.22]}
                          rotation={[0.04, 0.09, -0.76]}
                        >
                          <group
                            name="mixamorigLeftHandRing2"
                            position={[3.6, 0, 0]}
                            rotation={[0, 0.02, -0.2]}
                          >
                            <group
                              name="mixamorigLeftHandRing3"
                              position={[3.31, 0, 0]}
                              rotation={[0, 0, -0.02]}
                            >
                              <group
                                name="mixamorigLeftHandRing4"
                                position={[3.66, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigLeftHandPinky1"
                          position={[10.91, -0.23, -4.73]}
                          rotation={[0.12, 0.14, -1.07]}
                        >
                          <group
                            name="mixamorigLeftHandPinky2"
                            position={[4.14, 0, 0]}
                            rotation={[0, -0.07, -0.03]}
                          >
                            <group
                              name="mixamorigLeftHandPinky3"
                              position={[2.59, 0, 0]}
                              rotation={[0, -0.01, 0.05]}
                            >
                              <group
                                name="mixamorigLeftHandPinky4"
                                position={[2.92, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="mixamorigRightShoulder"
                  position={[-6.11, 9.11, 0.71]}
                  rotation={[0.01, 0.04, 0.1]}
                >
                  <group
                    name="mixamorigRightArm"
                    position={[-12.65, -0.27, -2.6]}
                    rotation={[-0.1, 0.09, 1.23]}
                  >
                    <group
                      name="mixamorigRightForeArm"
                      position={[-27.4, 0, 0]}
                      rotation={[0, 0.29, 0]}
                    >
                      <group
                        name="mixamorigRightHand"
                        position={[-27.61, 0, 0]}
                        rotation={[0.03, -0.03, -0.05]}
                      >
                        <group
                          name="mixamorigRightHandMiddle1"
                          position={[-12.78, 0, 0]}
                          rotation={[0.04, -0.1, 0.54]}
                        >
                          <group
                            name="mixamorigRightHandMiddle2"
                            position={[-3.61, 0, 0]}
                            rotation={[0.02, -0.06, 0.51]}
                          >
                            <group
                              name="mixamorigRightHandMiddle3"
                              position={[-3.46, 0, 0]}
                              rotation={[0, 0, -0.03]}
                            >
                              <group
                                name="mixamorigRightHandMiddle4"
                                position={[-3.68, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigRightHandThumb1"
                          position={[-3.79, -2.17, 3]}
                          rotation={[0.1, -0.18, 0.08]}
                        >
                          <group
                            name="mixamorigRightHandThumb2"
                            position={[-3.68, -2.12, 2.12]}
                            rotation={[0.1, -0.5, -0.02]}
                          >
                            <group
                              name="mixamorigRightHandThumb3"
                              position={[-3.39, -1.96, 1.96]}
                              rotation={[-0.03, 0.01, -0.04]}
                            >
                              <group
                                name="mixamorigRightHandThumb4"
                                position={[-2.68, -1.55, 1.55]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigRightHandIndex1"
                          position={[-12.27, -0.23, 2.82]}
                          rotation={[0.01, -0.05, 0.59]}
                        >
                          <group
                            name="mixamorigRightHandIndex2"
                            position={[-3.89, 0, 0]}
                            rotation={[0.02, -0.06, 0.51]}
                          >
                            <group
                              name="mixamorigRightHandIndex3"
                              position={[-3.42, 0, 0]}
                              rotation={[0, 0, -0.03]}
                            >
                              <group
                                name="mixamorigRightHandIndex4"
                                position={[-3.08, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigRightHandRing1"
                          position={[-12.15, 0.01, -2.22]}
                          rotation={[0.08, -0.17, 0.5]}
                        >
                          <group
                            name="mixamorigRightHandRing2"
                            position={[-3.6, 0, 0]}
                            rotation={[0.02, -0.06, 0.51]}
                          >
                            <group
                              name="mixamorigRightHandRing3"
                              position={[-3.31, 0, 0]}
                              rotation={[0, 0, -0.02]}
                            >
                              <group
                                name="mixamorigRightHandRing4"
                                position={[-3.66, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="mixamorigRightHandPinky1"
                          position={[-10.91, -0.23, -4.73]}
                          rotation={[0.1, -0.22, 0.48]}
                        >
                          <group
                            name="mixamorigRightHandPinky2"
                            position={[-4.14, 0, 0]}
                            rotation={[0.02, -0.06, 0.51]}
                          >
                            <group
                              name="mixamorigRightHandPinky3"
                              position={[-2.59, 0, 0]}
                              rotation={[0, 0, -0.02]}
                            >
                              <group
                                name="mixamorigRightHandPinky4"
                                position={[-2.92, 0, 0]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
          <group
            name="mixamorigRightUpLeg"
            position={[-9.12, -6.66, -0.06]}
            rotation={[-0.47, 0, 0.03]}
          >
            <group
              name="mixamorigRightLeg"
              position={[-0.24, -40.6, -0.51]}
              rotation={[0.61, 0.08, -0.02]}
            >
              <group
                name="mixamorigRightFoot"
                position={[0.24, -42.05, -2.06]}
                rotation={[-0.15, 0.25, 0.13]}
              >
                <group
                  name="mixamorigRightToeBase"
                  position={[-0.37, -10.49, 12.64]}
                  rotation={[-0.04, 0, 0]}
                >
                  <group name="mixamorigRightToe_End" position={[0, 0, 9.99]} />
                </group>
              </group>
            </group>
          </group>
          <group
            name="mixamorigLeftUpLeg"
            position={[9.12, -6.66, -0.06]}
            rotation={[-0.25, 0.29, 0.13]}
          >
            <group
              name="mixamorigLeftLeg"
              position={[0.24, -40.6, -0.52]}
              rotation={[0.71, 0.19, 0.04]}
            >
              <group
                name="mixamorigLeftFoot"
                position={[-0.24, -42.05, -2.06]}
                rotation={[-0.37, 0.51, 0.01]}
              >
                <group
                  name="mixamorigLeftToeBase"
                  position={[0.37, -10.49, 12.64]}
                  rotation={[-0.08, 0, 0]}
                >
                  <group name="mixamorigLeftToe_End" position={[0, 0, 9.99]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Cloner1">
          <mesh
            name="Platonic_0"
            geometry={nodes.Platonic_0.geometry}
            material={materials.Mat}
            position={[-1.54, 104.76, 34.14]}
            rotation={[0.04, -0.14, 1.02]}
            scale={1.08}
          />
          <mesh
            name="Disc_1"
            geometry={nodes.Disc_1.geometry}
            material={materials.Mat}
            position={[-19.74, 45.18, 6.05]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={0.96}
          />
          <mesh
            name="Platonic_2"
            geometry={nodes.Platonic_2.geometry}
            material={materials.Mat}
            position={[-10.39, 72.86, -0.03]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.39}
          />
          <mesh
            name="Sphere_3"
            geometry={nodes.Sphere_3.geometry}
            material={materials.Mat}
            position={[13.56, 16.05, -0.46]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={1.5}
          />
          <mesh
            name="Disc_4"
            geometry={nodes.Disc_4.geometry}
            material={materials.Mat}
            position={[8.7, 24.34, 3.18]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.18}
          />
          <mesh
            name="Disc_5"
            geometry={nodes.Disc_5.geometry}
            material={materials.Mat}
            position={[4.43, 116.03, 7.15]}
            rotation={[2.81, 0.96, 1.95]}
            scale={0.77}
          />
          <mesh
            name="Pyramid_6"
            geometry={nodes.Pyramid_6.geometry}
            material={materials.Mat}
            position={[1.8, 108.66, 35.48]}
            rotation={[-1.72, -0.94, -0.29]}
            scale={0.6}
          />
          <mesh
            name="Pyramid_7"
            geometry={nodes.Pyramid_7.geometry}
            material={materials.Mat}
            position={[-2.4, 105.79, 34.06]}
            rotation={[0.04, -0.14, 1.02]}
            scale={0.51}
          />
          <mesh
            name="Platonic_8"
            geometry={nodes.Platonic_8.geometry}
            material={materials.Mat}
            position={[-20.26, 45.62, 1.32]}
            rotation={[0.07, -0.39, 1.66]}
            scale={0.44}
          />
          <mesh
            name="Disc_9"
            geometry={nodes.Disc_9.geometry}
            material={materials.Mat}
            position={[6.7, 142.97, 4.74]}
            rotation={[-0.31, 0.19, -1.43]}
            scale={1.04}
          />
          <mesh
            name="Sphere_10"
            geometry={nodes.Sphere_10.geometry}
            material={materials.Mat}
            position={[-0.36, 40, 10.16]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.1}
          />
          <mesh
            name="Pyramid_11"
            geometry={nodes.Pyramid_11.geometry}
            material={materials.Mat}
            position={[1.33, 81.22, 17.41]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.53}
          />
          <mesh
            name="Disc_12"
            geometry={nodes.Disc_12.geometry}
            material={materials.Mat}
            position={[-4.67, 60.28, 15.52]}
            rotation={[3.05, 0.67, -1.38]}
            scale={0.89}
          />
          <mesh
            name="Disc_13"
            geometry={nodes.Disc_13.geometry}
            material={materials.Mat}
            position={[16.96, 89.65, -20.69]}
            rotation={[0.31, 0.25, 1.43]}
            scale={0.85}
          />
          <mesh
            name="Pyramid_14"
            geometry={nodes.Pyramid_14.geometry}
            material={materials.Mat}
            position={[10.08, 159.43, -6.26]}
            rotation={[-0.25, 0.76, -2.3]}
            scale={0.58}
          />
          <mesh
            name="Disc_15"
            geometry={nodes.Disc_15.geometry}
            material={materials.Mat}
            position={[6.89, 24.52, 5.46]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={0.45}
          />
          <mesh
            name="Sphere_16"
            geometry={nodes.Sphere_16.geometry}
            material={materials.Mat}
            position={[-4.46, 54.73, 16.22]}
            rotation={[3.05, 0.67, -1.38]}
          />
          <mesh
            name="Sphere_17"
            geometry={nodes.Sphere_17.geometry}
            material={materials.Mat}
            position={[-3.21, 64.29, 16.28]}
            rotation={[3.05, 0.67, -1.38]}
            scale={1.55}
          />
          <mesh
            name="Sphere_18"
            geometry={nodes.Sphere_18.geometry}
            material={materials.Mat}
            position={[0.32, 73.82, 13.62]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={1.12}
          />
          <mesh
            name="Sphere_19"
            geometry={nodes.Sphere_19.geometry}
            material={materials.Mat}
            position={[18.56, 104.81, -14.28]}
            rotation={[2.18, 0.77, 2.81]}
            scale={0.9}
          />
          <mesh
            name="Pyramid_20"
            geometry={nodes.Pyramid_20.geometry}
            material={materials.Mat}
            position={[-5.23, 77.96, 0.29]}
            rotation={[3.01, -0.03, -1]}
            scale={1.45}
          />
          <mesh
            name="Disc_21"
            geometry={nodes.Disc_21.geometry}
            material={materials.Mat}
            position={[-8.91, 75.36, -1.93]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.19}
          />
          <mesh
            name="Disc_22"
            geometry={nodes.Disc_22.geometry}
            material={materials.Mat}
            position={[15.33, 79.73, -23.13]}
            rotation={[-2.55, 1.2, -1.75]}
            scale={1.5}
          />
          <mesh
            name="Pyramid_23"
            geometry={nodes.Pyramid_23.geometry}
            material={materials.Mat}
            position={[2.81, 33.95, 11.03]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.41}
          />
          <mesh
            name="Pyramid_24"
            geometry={nodes.Pyramid_24.geometry}
            material={materials.Mat}
            position={[18.31, 101.45, -14.41]}
            rotation={[3.12, 1.31, -1.18]}
            scale={1.24}
          />
          <mesh
            name="Sphere_25"
            geometry={nodes.Sphere_25.geometry}
            material={materials.Mat}
            position={[18.39, 103.21, -14.12]}
            rotation={[3.12, 1.31, -1.18]}
            scale={1.52}
          />
          <mesh
            name="Disc_26"
            geometry={nodes.Disc_26.geometry}
            material={materials.Mat}
            position={[18.23, 68.2, -26.47]}
            rotation={[-2.97, -0.44, -1.34]}
            scale={0.68}
          />
          <mesh
            name="Pyramid_27"
            geometry={nodes.Pyramid_27.geometry}
            material={materials.Mat}
            position={[-10.41, 68.89, 1.65]}
            rotation={[3.01, -0.03, -1]}
            scale={1.54}
          />
          <mesh
            name="Pyramid_28"
            geometry={nodes.Pyramid_28.geometry}
            material={materials.Mat}
            position={[-3.68, 84.67, -0.98]}
            rotation={[1.51, 1.06, -0.14]}
            scale={0.97}
          />
          <mesh
            name="Sphere_29"
            geometry={nodes.Sphere_29.geometry}
            material={materials.Mat}
            position={[5.04, 120.33, 6.5]}
            rotation={[0.18, 0.55, -1.8]}
            scale={0.89}
          />
          <mesh
            name="Pyramid_30"
            geometry={nodes.Pyramid_30.geometry}
            material={materials.Mat}
            position={[-5.19, 81.84, -3.52]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.15}
          />
          <mesh
            name="Disc_31"
            geometry={nodes.Disc_31.geometry}
            material={materials.Mat}
            position={[18.78, 131.67, -9.73]}
            rotation={[1.46, -0.81, -0.36]}
            scale={0.55}
          />
          <mesh
            name="Platonic_32"
            geometry={nodes.Platonic_32.geometry}
            material={materials.Mat}
            position={[-10.39, 90.01, 31.42]}
            rotation={[-2.14, -0.78, -1.19]}
            scale={0.45}
          />
          <mesh
            name="Platonic_33"
            geometry={nodes.Platonic_33.geometry}
            material={materials.Mat}
            position={[18.36, 91.15, -19.4]}
            rotation={[-0.39, -1.25, 0.83]}
            scale={0.44}
          />
          <mesh
            name="Disc_34"
            geometry={nodes.Disc_34.geometry}
            material={materials.Mat}
            position={[1.92, 78.62, 15.9]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.6}
          />
          <mesh
            name="Sphere_35"
            geometry={nodes.Sphere_35.geometry}
            material={materials.Mat}
            position={[-3.56, 78.62, 0.15]}
            rotation={[3.01, -0.03, -1]}
            scale={1.14}
          />
          <mesh
            name="Disc_36"
            geometry={nodes.Disc_36.geometry}
            material={materials.Mat}
            position={[-22.15, 41.49, 2.32]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.43}
          />
          <mesh
            name="Platonic_37"
            geometry={nodes.Platonic_37.geometry}
            material={materials.Mat}
            position={[15.43, 10.84, -0.11]}
            rotation={[-0.79, 0.3, 1.52]}
            scale={0.52}
          />
          <mesh
            name="Disc_38"
            geometry={nodes.Disc_38.geometry}
            material={materials.Mat}
            position={[2.9, 136.77, 27.12]}
            rotation={[2.72, 0.01, -1.59]}
            scale={1.56}
          />
          <mesh
            name="Disc_39"
            geometry={nodes.Disc_39.geometry}
            material={materials.Mat}
            position={[18.51, 93.26, -19.76]}
            rotation={[-0.39, -1.25, 0.83]}
            scale={0.51}
          />
          <mesh
            name="Platonic_40"
            geometry={nodes.Platonic_40.geometry}
            material={materials.Mat}
            position={[-20.95, 35.15, 1.54]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={1.56}
          />
          <mesh
            name="Sphere_41"
            geometry={nodes.Sphere_41.geometry}
            material={materials.Mat}
            position={[5.88, 147.16, 3.55]}
            rotation={[-0.31, 0.19, -1.43]}
            scale={0.85}
          />
          <mesh
            name="Platonic_42"
            geometry={nodes.Platonic_42.geometry}
            material={materials.Mat}
            position={[3.92, 135.42, 27.74]}
            rotation={[2.72, 0.01, -1.59]}
            scale={1.28}
          />
          <mesh
            name="Platonic_43"
            geometry={nodes.Platonic_43.geometry}
            material={materials.Mat}
            position={[-12.07, 87.18, 33.48]}
            rotation={[2.95, 0.31, -1.1]}
            scale={0.66}
          />
          <mesh
            name="Pyramid_44"
            geometry={nodes.Pyramid_44.geometry}
            material={materials.Mat}
            position={[11.46, 160.22, -7.22]}
            rotation={[-1.1, -0.6, -2.09]}
            scale={1.02}
          />
          <mesh
            name="Sphere_45"
            geometry={nodes.Sphere_45.geometry}
            material={materials.Mat}
            position={[-1.12, 68.56, 13.84]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.76}
          />
          <mesh
            name="Sphere_46"
            geometry={nodes.Sphere_46.geometry}
            material={materials.Mat}
            position={[-4.24, 53.88, 15.86]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.81}
          />
          <mesh
            name="Sphere_47"
            geometry={nodes.Sphere_47.geometry}
            material={materials.Mat}
            position={[14.29, 9.43, 2.88]}
            rotation={[2.39, 1.27, -1.55]}
            scale={1.53}
          />
          <mesh
            name="Disc_48"
            geometry={nodes.Disc_48.geometry}
            material={materials.Mat}
            position={[-2.05, 35.81, 12.32]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.64}
          />
          <mesh
            name="Sphere_49"
            geometry={nodes.Sphere_49.geometry}
            material={materials.Mat}
            position={[3.4, 137.88, 18.12]}
            rotation={[-1.73, 0.89, 1.52]}
            scale={0.64}
          />
          <mesh
            name="Sphere_50"
            geometry={nodes.Sphere_50.geometry}
            material={materials.Mat}
            position={[17.14, 77.72, -24.1]}
            rotation={[0.66, -1.19, 1.99]}
            scale={0.94}
          />
          <mesh
            name="Disc_51"
            geometry={nodes.Disc_51.geometry}
            material={materials.Mat}
            position={[9.62, 153.11, -4.75]}
            rotation={[2.25, -0.83, 2.36]}
            scale={1.1}
          />
          <mesh
            name="Sphere_52"
            geometry={nodes.Sphere_52.geometry}
            material={materials.Mat}
            position={[2.29, 136.03, 24.1]}
            rotation={[-0.54, -0.01, 1.59]}
            scale={0.64}
          />
          <mesh
            name="Disc_53"
            geometry={nodes.Disc_53.geometry}
            material={materials.Mat}
            position={[2.38, 104.89, 6.29]}
            rotation={[0.25, 0.73, -1.84]}
            scale={0.79}
          />
          <mesh
            name="Pyramid_54"
            geometry={nodes.Pyramid_54.geometry}
            material={materials.Mat}
            position={[-18.26, 43.36, 2.66]}
            rotation={[3.13, -1.19, -1.71]}
            scale={1.31}
          />
          <mesh
            name="Sphere_55"
            geometry={nodes.Sphere_55.geometry}
            material={materials.Mat}
            position={[18.23, 119.74, -12.53]}
            rotation={[0.09, 0.24, 1.7]}
            scale={1.41}
          />
          <mesh
            name="Pyramid_56"
            geometry={nodes.Pyramid_56.geometry}
            material={materials.Mat}
            position={[18.3, 92.25, -20.01]}
            rotation={[-0.39, -1.25, 0.83]}
            scale={0.77}
          />
          <mesh
            name="Disc_57"
            geometry={nodes.Disc_57.geometry}
            material={materials.Mat}
            position={[-20.19, 50.56, 5.74]}
            rotation={[2.1, -0.76, 0.54]}
            scale={1.1}
          />
          <mesh
            name="Disc_58"
            geometry={nodes.Disc_58.geometry}
            material={materials.Mat}
            position={[-11.3, 89.59, 33.17]}
            rotation={[0.29, 1.32, 0.79]}
            scale={1.25}
          />
          <mesh
            name="Disc_59"
            geometry={nodes.Disc_59.geometry}
            material={materials.Mat}
            position={[-7.6, 74.03, -2.32]}
            rotation={[-0.23, 0.1, 1]}
            scale={1.12}
          />
          <mesh
            name="Disc_60"
            geometry={nodes.Disc_60.geometry}
            material={materials.Mat}
            position={[19.44, 122.09, -10.61]}
            rotation={[-2.93, -0.25, -1.67]}
            scale={1.24}
          />
          <mesh
            name="Pyramid_61"
            geometry={nodes.Pyramid_61.geometry}
            material={materials.Mat}
            position={[-4.73, 54.2, 16.05]}
            rotation={[3.05, 0.67, -1.38]}
            scale={1.2}
          />
          <mesh
            name="Disc_62"
            geometry={nodes.Disc_62.geometry}
            material={materials.Mat}
            position={[0.74, 78.73, 12.7]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={1.31}
          />
          <mesh
            name="Disc_63"
            geometry={nodes.Disc_63.geometry}
            material={materials.Mat}
            position={[19.2, 102.9, -16.97]}
            rotation={[0.31, 0.25, 1.43]}
            scale={1.11}
          />
          <mesh
            name="Disc_64"
            geometry={nodes.Disc_64.geometry}
            material={materials.Mat}
            position={[-4.45, 62.45, 15.41]}
            rotation={[0.11, 0.9, 1.35]}
            scale={1.31}
          />
          <mesh
            name="Pyramid_65"
            geometry={nodes.Pyramid_65.geometry}
            material={materials.Mat}
            position={[-13.95, 66.69, 2.04]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.14}
          />
          <mesh
            name="Sphere_66"
            geometry={nodes.Sphere_66.geometry}
            material={materials.Mat}
            position={[-8.48, 75.28, -2.53]}
            rotation={[-0.23, 0.1, 1]}
            scale={0.8}
          />
          <mesh
            name="Disc_67"
            geometry={nodes.Disc_67.geometry}
            material={materials.Mat}
            position={[-3.32, 39.96, 15.23]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.37}
          />
          <mesh
            name="Disc_68"
            geometry={nodes.Disc_68.geometry}
            material={materials.Mat}
            position={[3.23, 108.05, 6.54]}
            rotation={[2.92, 0.79, 1.86]}
            scale={0.49}
          />
          <mesh
            name="Sphere_69"
            geometry={nodes.Sphere_69.geometry}
            material={materials.Mat}
            position={[5.46, 151.89, 1.38]}
            rotation={[-1.79, 1.08, 1.54]}
            scale={0.98}
          />
          <mesh
            name="Disc_70"
            geometry={nodes.Disc_70.geometry}
            material={materials.Mat}
            position={[19.87, 113.58, -12.73]}
            rotation={[0.36, -1.32, 1.77]}
            scale={0.56}
          />
          <mesh
            name="Platonic_71"
            geometry={nodes.Platonic_71.geometry}
            material={materials.Mat}
            position={[5.36, 29.23, 8.15]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={0.93}
          />
          <mesh
            name="Pyramid_72"
            geometry={nodes.Pyramid_72.geometry}
            material={materials.Mat}
            position={[12.11, 18.89, 1.62]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.23}
          />
          <mesh
            name="Pyramid_73"
            geometry={nodes.Pyramid_73.geometry}
            material={materials.Mat}
            position={[17.78, 97.55, -16.32]}
            rotation={[3.12, 1.31, -1.18]}
            scale={0.55}
          />
          <mesh
            name="Disc_74"
            geometry={nodes.Disc_74.geometry}
            material={materials.Mat}
            position={[1.98, 33.11, 10.75]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.55}
          />
          <mesh
            name="Platonic_75"
            geometry={nodes.Platonic_75.geometry}
            material={materials.Mat}
            position={[0.7, 82.26, 17.65]}
            rotation={[3.05, 0.67, -1.38]}
            scale={0.66}
          />
          <mesh
            name="Platonic_76"
            geometry={nodes.Platonic_76.geometry}
            material={materials.Mat}
            position={[-0.04, 33.86, 8.13]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={1.08}
          />
          <mesh
            name="Sphere_77"
            geometry={nodes.Sphere_77.geometry}
            material={materials.Mat}
            position={[-13.32, 86.32, 33.24]}
            rotation={[2.95, 0.31, -1.1]}
            scale={1.25}
          />
          <mesh
            name="Platonic_78"
            geometry={nodes.Platonic_78.geometry}
            material={materials.Mat}
            position={[-17.82, 27.22, 1.72]}
            rotation={[3.13, -1.19, -1.71]}
            scale={0.72}
          />
          <mesh
            name="Platonic_79"
            geometry={nodes.Platonic_79.geometry}
            material={materials.Mat}
            position={[7.17, 133.72, 5.67]}
            rotation={[0.06, -1.17, -1.45]}
            scale={1.3}
          />
          <mesh
            name="Pyramid_80"
            geometry={nodes.Pyramid_80.geometry}
            material={materials.Mat}
            position={[10.95, 2.06, 16.42]}
            rotation={[1.86, -0.43, -1.05]}
            scale={0.58}
          />
          <mesh
            name="Disc_81"
            geometry={nodes.Disc_81.geometry}
            material={materials.Mat}
            position={[-0.35, 74.65, 17.45]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.77}
          />
          <mesh
            name="Platonic_82"
            geometry={nodes.Platonic_82.geometry}
            material={materials.Mat}
            position={[1.07, 32.26, 8.06]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.85}
          />
          <mesh
            name="Disc_83"
            geometry={nodes.Disc_83.geometry}
            material={materials.Mat}
            position={[20.41, 103.77, -13.66]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.2}
          />
          <mesh
            name="Platonic_84"
            geometry={nodes.Platonic_84.geometry}
            material={materials.Mat}
            position={[19.18, 100.89, -14.7]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.01}
          />
          <mesh
            name="Platonic_85"
            geometry={nodes.Platonic_85.geometry}
            material={materials.Mat}
            position={[1.64, 75.55, 14.2]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.87}
          />
          <mesh
            name="Disc_86"
            geometry={nodes.Disc_86.geometry}
            material={materials.Mat}
            position={[17.08, 130.62, -11.28]}
            rotation={[0.09, 0.24, 1.7]}
            scale={0.47}
          />
          <mesh
            name="Disc_87"
            geometry={nodes.Disc_87.geometry}
            material={materials.Mat}
            position={[-18.65, 21.61, 0.48]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.96}
          />
          <mesh
            name="Pyramid_88"
            geometry={nodes.Pyramid_88.geometry}
            material={materials.Mat}
            position={[-20.59, 37.7, 4.17]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={1.31}
          />
          <mesh
            name="Sphere_89"
            geometry={nodes.Sphere_89.geometry}
            material={materials.Mat}
            position={[-17.73, 28.17, 1.49]}
            rotation={[3.13, -1.19, -1.71]}
            scale={0.97}
          />
          <mesh
            name="Platonic_90"
            geometry={nodes.Platonic_90.geometry}
            material={materials.Mat}
            position={[7.78, 129.08, 7.06]}
            rotation={[3, -0.4, 1.55]}
            scale={1.08}
          />
          <mesh
            name="Platonic_91"
            geometry={nodes.Platonic_91.geometry}
            material={materials.Mat}
            position={[-4.34, 83.39, -2.5]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.03}
          />
          <mesh
            name="Disc_92"
            geometry={nodes.Disc_92.geometry}
            material={materials.Mat}
            position={[19.21, 103.89, -13.29]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.4}
          />
          <mesh
            name="Pyramid_93"
            geometry={nodes.Pyramid_93.geometry}
            material={materials.Mat}
            position={[-2.5, 80.29, 14.95]}
            rotation={[0.11, 0.9, 1.35]}
            scale={0.98}
          />
          <mesh
            name="Disc_94"
            geometry={nodes.Disc_94.geometry}
            material={materials.Mat}
            position={[-3.3, 59.75, 16.51]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={1.29}
          />
          <mesh
            name="Pyramid_95"
            geometry={nodes.Pyramid_95.geometry}
            material={materials.Mat}
            position={[3.5, 108.66, 6.24]}
            rotation={[0.25, 0.73, -1.84]}
            scale={0.83}
          />
          <mesh
            name="Platonic_96"
            geometry={nodes.Platonic_96.geometry}
            material={materials.Mat}
            position={[13.84, 77.6, -25.16]}
            rotation={[2.99, 1.12, -0.8]}
            scale={0.47}
          />
          <mesh
            name="Disc_97"
            geometry={nodes.Disc_97.geometry}
            material={materials.Mat}
            position={[-0.78, 76.38, 12.35]}
            rotation={[0.11, 0.9, 1.35]}
            scale={0.9}
          />
          <mesh
            name="Pyramid_98"
            geometry={nodes.Pyramid_98.geometry}
            material={materials.Mat}
            position={[17.56, 74.73, -24.83]}
            rotation={[-2.87, -0.36, -1.77]}
            scale={1.33}
          />
          <mesh
            name="Sphere_99"
            geometry={nodes.Sphere_99.geometry}
            material={materials.Mat}
            position={[3.19, 110.63, 35.67]}
            rotation={[-1.72, -0.94, -0.29]}
            scale={1.25}
          />
          <mesh
            name="Pyramid_100"
            geometry={nodes.Pyramid_100.geometry}
            material={materials.Mat}
            position={[-2.48, 102.81, 35.69]}
            rotation={[-3, 0.2, -1.04]}
            scale={1.12}
          />
          <mesh
            name="Disc_101"
            geometry={nodes.Disc_101.geometry}
            material={materials.Mat}
            position={[-1.9, 71.85, 13.25]}
            rotation={[0.11, 0.9, 1.35]}
            scale={1.47}
          />
          <mesh
            name="Sphere_102"
            geometry={nodes.Sphere_102.geometry}
            material={materials.Mat}
            position={[19.74, 101.51, -17.57]}
            rotation={[0.31, 0.25, 1.43]}
            scale={1.17}
          />
          <mesh
            name="Disc_103"
            geometry={nodes.Disc_103.geometry}
            material={materials.Mat}
            position={[19.79, 96.5, -16.96]}
            rotation={[-0.39, -1.25, 0.83]}
            scale={0.87}
          />
          <mesh
            name="Disc_104"
            geometry={nodes.Disc_104.geometry}
            material={materials.Mat}
            position={[15.41, 80.15, -23.34]}
            rotation={[2.44, 0.87, 2.55]}
            scale={0.97}
          />
          <mesh
            name="Platonic_105"
            geometry={nodes.Platonic_105.geometry}
            material={materials.Mat}
            position={[16.4, 128.88, -11.27]}
            rotation={[0.09, 0.24, 1.7]}
            scale={1.18}
          />
          <mesh
            name="Sphere_106"
            geometry={nodes.Sphere_106.geometry}
            material={materials.Mat}
            position={[-4.69, 79.26, -3.87]}
            rotation={[-0.23, 0.1, 1]}
            scale={1.07}
          />
          <mesh
            name="Platonic_107"
            geometry={nodes.Platonic_107.geometry}
            material={materials.Mat}
            position={[14.76, 11.31, 1.94]}
            rotation={[2.48, -0.3, -1.48]}
            scale={0.45}
          />
          <mesh
            name="Pyramid_108"
            geometry={nodes.Pyramid_108.geometry}
            material={materials.Mat}
            position={[-3.89, 103.5, 35.49]}
            rotation={[-3, 0.2, -1.04]}
            scale={0.87}
          />
          <mesh
            name="Sphere_109"
            geometry={nodes.Sphere_109.geometry}
            material={materials.Mat}
            position={[-5.87, 45.08, 15.85]}
            rotation={[3.03, 0.19, 1.05]}
            scale={0.73}
          />
          <mesh
            name="Pyramid_110"
            geometry={nodes.Pyramid_110.geometry}
            material={materials.Mat}
            position={[-3.59, 44.08, 12.07]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.27}
          />
          <mesh
            name="Pyramid_111"
            geometry={nodes.Pyramid_111.geometry}
            material={materials.Mat}
            position={[6.64, 155.53, -0.15]}
            rotation={[1.92, 0.54, 2.15]}
            scale={1.28}
          />
          <mesh
            name="Platonic_112"
            geometry={nodes.Platonic_112.geometry}
            material={materials.Mat}
            position={[14.47, 79.16, -24.08]}
            rotation={[2.99, 1.12, -0.8]}
            scale={1.1}
          />
          <mesh
            name="Disc_113"
            geometry={nodes.Disc_113.geometry}
            material={materials.Mat}
            position={[18.96, 120.86, -12.61]}
            rotation={[0.09, 0.24, 1.7]}
            scale={1.32}
          />
          <mesh
            name="Sphere_114"
            geometry={nodes.Sphere_114.geometry}
            material={materials.Mat}
            position={[-18.4, 36.62, 3.05]}
            rotation={[3.13, -1.19, -1.71]}
            scale={0.71}
          />
          <mesh
            name="Sphere_115"
            geometry={nodes.Sphere_115.geometry}
            material={materials.Mat}
            position={[-5.76, 79.12, -3.72]}
            rotation={[-0.23, 0.1, 1]}
            scale={0.54}
          />
          <mesh
            name="Platonic_116"
            geometry={nodes.Platonic_116.geometry}
            material={materials.Mat}
            position={[14.49, 6.51, 5.8]}
            rotation={[2.48, -0.3, -1.48]}
            scale={0.93}
          />
          <mesh
            name="Sphere_117"
            geometry={nodes.Sphere_117.geometry}
            material={materials.Mat}
            position={[-23.71, 48.22, 3.85]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.89}
          />
          <mesh
            name="Disc_118"
            geometry={nodes.Disc_118.geometry}
            material={materials.Mat}
            position={[-22.31, 43.06, 2.2]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.46}
          />
          <mesh
            name="Disc_119"
            geometry={nodes.Disc_119.geometry}
            material={materials.Mat}
            position={[-22.42, 41.4, 4.2]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={1.4}
          />
          <mesh
            name="Pyramid_120"
            geometry={nodes.Pyramid_120.geometry}
            material={materials.Mat}
            position={[15.17, 79.56, -24.55]}
            rotation={[0.47, 0.37, 1.43]}
            scale={0.44}
          />
          <mesh
            name="Platonic_121"
            geometry={nodes.Platonic_121.geometry}
            material={materials.Mat}
            position={[-12.64, 85.01, 33.93]}
            rotation={[-0.43, -0.2, 1.17]}
            scale={0.9}
          />
          <mesh
            name="Platonic_122"
            geometry={nodes.Platonic_122.geometry}
            material={materials.Mat}
            position={[19.84, 97.98, -16.23]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.53}
          />
          <mesh
            name="Platonic_123"
            geometry={nodes.Platonic_123.geometry}
            material={materials.Mat}
            position={[-18.23, 25.26, 0.71]}
            rotation={[0.07, -0.39, 1.66]}
            scale={0.88}
          />
          <mesh
            name="Sphere_124"
            geometry={nodes.Sphere_124.geometry}
            material={materials.Mat}
            position={[10.43, 21.35, 3.19]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.57}
          />
          <mesh
            name="Platonic_125"
            geometry={nodes.Platonic_125.geometry}
            material={materials.Mat}
            position={[15.1, 134.16, -6.43]}
            rotation={[1.98, -0.72, 2.49]}
            scale={0.46}
          />
          <mesh
            name="Pyramid_126"
            geometry={nodes.Pyramid_126.geometry}
            material={materials.Mat}
            position={[19.23, 94.69, -17.62]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={0.54}
          />
          <mesh
            name="Platonic_127"
            geometry={nodes.Platonic_127.geometry}
            material={materials.Mat}
            position={[18.76, 116.56, -12.95]}
            rotation={[0.09, 0.24, 1.7]}
            scale={0.65}
          />
          <mesh
            name="Disc_128"
            geometry={nodes.Disc_128.geometry}
            material={materials.Mat}
            position={[18.44, 121.02, -12.47]}
            rotation={[0.09, 0.24, 1.7]}
            scale={0.52}
          />
          <mesh
            name="Disc_129"
            geometry={nodes.Disc_129.geometry}
            material={materials.Mat}
            position={[-22.26, 47.01, 0.8]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.66}
          />
          <mesh
            name="Sphere_130"
            geometry={nodes.Sphere_130.geometry}
            material={materials.Mat}
            position={[-3.87, 43.17, 11.75]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.36}
          />
          <mesh
            name="Disc_131"
            geometry={nodes.Disc_131.geometry}
            material={materials.Mat}
            position={[16.5, 87.19, -20.94]}
            rotation={[3.12, 1.31, -1.18]}
            scale={1.51}
          />
          <mesh
            name="Platonic_132"
            geometry={nodes.Platonic_132.geometry}
            material={materials.Mat}
            position={[-19.88, 27.62, 1.44]}
            rotation={[-0.31, 1.15, 1.99]}
            scale={0.46}
          />
          <mesh
            name="Disc_133"
            geometry={nodes.Disc_133.geometry}
            material={materials.Mat}
            position={[7.1, 27.86, 6.05]}
            rotation={[1.74, -1.08, 2.86]}
            scale={0.45}
          />
          <mesh
            name="Platonic_134"
            geometry={nodes.Platonic_134.geometry}
            material={materials.Mat}
            position={[17.05, 77.92, -24.25]}
            rotation={[0.66, -1.19, 1.99]}
            scale={0.52}
          />
          <mesh
            name="Disc_135"
            geometry={nodes.Disc_135.geometry}
            material={materials.Mat}
            position={[-0.92, 71.18, 13.33]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.51}
          />
          <mesh
            name="Sphere_136"
            geometry={nodes.Sphere_136.geometry}
            material={materials.Mat}
            position={[-4.12, 83.88, -1.22]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.27}
          />
          <mesh
            name="Pyramid_137"
            geometry={nodes.Pyramid_137.geometry}
            material={materials.Mat}
            position={[13.8, 16.12, -0.1]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={1.18}
          />
          <mesh
            name="Pyramid_138"
            geometry={nodes.Pyramid_138.geometry}
            material={materials.Mat}
            position={[9.81, 157.24, -3.85]}
            rotation={[-1.1, -0.6, -2.09]}
            scale={1.1}
          />
          <mesh
            name="Platonic_139"
            geometry={nodes.Platonic_139.geometry}
            material={materials.Mat}
            position={[3.4, 138.46, 21.66]}
            rotation={[-1.73, 0.89, 1.52]}
            scale={0.47}
          />
          <mesh
            name="Platonic_140"
            geometry={nodes.Platonic_140.geometry}
            material={materials.Mat}
            position={[15.11, 65.73, -28.28]}
            rotation={[2.99, -0.51, -1.19]}
            scale={0.84}
          />
          <mesh
            name="Disc_141"
            geometry={nodes.Disc_141.geometry}
            material={materials.Mat}
            position={[18.09, 95.39, -19.12]}
            rotation={[0.31, 0.25, 1.43]}
            scale={1.26}
          />
          <mesh
            name="Disc_142"
            geometry={nodes.Disc_142.geometry}
            material={materials.Mat}
            position={[4.06, 108.02, 6.58]}
            rotation={[-3.05, -0.75, 1.73]}
            scale={1.55}
          />
          <mesh
            name="Sphere_143"
            geometry={nodes.Sphere_143.geometry}
            material={materials.Mat}
            position={[-0.78, 67.51, 15.8]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.65}
          />
          <mesh
            name="Pyramid_144"
            geometry={nodes.Pyramid_144.geometry}
            material={materials.Mat}
            position={[1.06, 91.33, 8.47]}
            rotation={[2.35, 0.7, -1.66]}
            scale={1.42}
          />
          <mesh
            name="Pyramid_145"
            geometry={nodes.Pyramid_145.geometry}
            material={materials.Mat}
            position={[-4.88, 44.35, 12.68]}
            rotation={[0.99, 0.41, -1.19]}
            scale={1.37}
          />
          <mesh
            name="Platonic_146"
            geometry={nodes.Platonic_146.geometry}
            material={materials.Mat}
            position={[-21.33, 3.31, 9.63]}
            rotation={[2.45, -0.23, -1.22]}
            scale={1.31}
          />
          <mesh
            name="Platonic_147"
            geometry={nodes.Platonic_147.geometry}
            material={materials.Mat}
            position={[-18.94, 43.66, 1.72]}
            rotation={[0.07, -0.39, 1.66]}
            scale={1.27}
          />
          <mesh
            name="Sphere_148"
            geometry={nodes.Sphere_148.geometry}
            material={materials.Mat}
            position={[-1.54, 63.74, 14.73]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.62}
          />
          <mesh
            name="Disc_149"
            geometry={nodes.Disc_149.geometry}
            material={materials.Mat}
            position={[0.59, 89.84, 2.39]}
            rotation={[-2.14, 0.79, -1.53]}
            scale={0.56}
          />
          <mesh
            name="Disc_150"
            geometry={nodes.Disc_150.geometry}
            material={materials.Mat}
            position={[1.21, 73.88, 15.32]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.9}
          />
          <mesh
            name="Sphere_151"
            geometry={nodes.Sphere_151.geometry}
            material={materials.Mat}
            position={[-2.53, 71.91, 14.05]}
            rotation={[0.11, 0.9, 1.35]}
            scale={0.64}
          />
          <mesh
            name="Pyramid_152"
            geometry={nodes.Pyramid_152.geometry}
            material={materials.Mat}
            position={[3.74, 138.61, 19.6]}
            rotation={[1.42, 0.68, -1.52]}
            scale={1.56}
          />
          <mesh
            name="Sphere_153"
            geometry={nodes.Sphere_153.geometry}
            material={materials.Mat}
            position={[-17.94, 11.25, 0.82]}
            rotation={[0.99, 0.6, 2.84]}
            scale={1.43}
          />
          <mesh
            name="Pyramid_154"
            geometry={nodes.Pyramid_154.geometry}
            material={materials.Mat}
            position={[15.48, 10.26, 0.46]}
            rotation={[-0.79, 0.3, 1.52]}
            scale={1.5}
          />
          <mesh
            name="Platonic_155"
            geometry={nodes.Platonic_155.geometry}
            material={materials.Mat}
            position={[1.81, 30.83, 9.56]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.81}
          />
          <mesh
            name="Disc_156"
            geometry={nodes.Disc_156.geometry}
            material={materials.Mat}
            position={[0.91, 112.61, 35.96]}
            rotation={[1.35, 1.06, 0.36]}
            scale={1.41}
          />
          <mesh
            name="Disc_157"
            geometry={nodes.Disc_157.geometry}
            material={materials.Mat}
            position={[7.22, 134.01, 5.8]}
            rotation={[0.06, -1.17, -1.45]}
            scale={1.26}
          />
          <mesh
            name="Disc_158"
            geometry={nodes.Disc_158.geometry}
            material={materials.Mat}
            position={[-0.23, 77.55, 17.36]}
            rotation={[3.05, 0.67, -1.38]}
            scale={1.2}
          />
          <mesh
            name="Pyramid_159"
            geometry={nodes.Pyramid_159.geometry}
            material={materials.Mat}
            position={[9.62, 66, -31.08]}
            rotation={[0, 0.56, 1.15]}
            scale={1.44}
          />
          <mesh
            name="Pyramid_160"
            geometry={nodes.Pyramid_160.geometry}
            material={materials.Mat}
            position={[5.03, 119.3, 6.9]}
            rotation={[2.81, 0.96, 1.95]}
            scale={0.74}
          />
          <mesh
            name="Disc_161"
            geometry={nodes.Disc_161.geometry}
            material={materials.Mat}
            position={[13.67, 76.62, -26.34]}
            rotation={[0.62, 0.34, 1.2]}
            scale={1.04}
          />
          <mesh
            name="Platonic_162"
            geometry={nodes.Platonic_162.geometry}
            material={materials.Mat}
            position={[0.44, 39.18, 12.97]}
            rotation={[1.74, -1.08, 2.86]}
            scale={1.04}
          />
          <mesh
            name="Platonic_163"
            geometry={nodes.Platonic_163.geometry}
            material={materials.Mat}
            position={[0.77, 34.54, 7.94]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.16}
          />
          <mesh
            name="Sphere_164"
            geometry={nodes.Sphere_164.geometry}
            material={materials.Mat}
            position={[17.25, 94.34, -18.25]}
            rotation={[3.12, 1.31, -1.18]}
            scale={0.79}
          />
          <mesh
            name="Disc_165"
            geometry={nodes.Disc_165.geometry}
            material={materials.Mat}
            position={[17.98, 91.42, -20.38]}
            rotation={[0.31, 0.25, 1.43]}
            scale={1.16}
          />
          <mesh
            name="Disc_166"
            geometry={nodes.Disc_166.geometry}
            material={materials.Mat}
            position={[2.34, 83.87, 14.78]}
            rotation={[2.39, -0.83, 1.12]}
            scale={0.68}
          />
          <mesh
            name="Disc_167"
            geometry={nodes.Disc_167.geometry}
            material={materials.Mat}
            position={[-1.97, 68.7, 16.84]}
            rotation={[3.05, 0.67, -1.38]}
            scale={1.16}
          />
          <mesh
            name="Platonic_168"
            geometry={nodes.Platonic_168.geometry}
            material={materials.Mat}
            position={[8.04, 155.88, -0.82]}
            rotation={[2.75, -0.84, 2.2]}
            scale={0.43}
          />
          <mesh
            name="Disc_169"
            geometry={nodes.Disc_169.geometry}
            material={materials.Mat}
            position={[3.54, 105.49, 6.84]}
            rotation={[-3.05, -0.75, 1.73]}
            scale={0.95}
          />
          <mesh
            name="Disc_170"
            geometry={nodes.Disc_170.geometry}
            material={materials.Mat}
            position={[15.92, 78.34, -24.88]}
            rotation={[-0.06, -1.15, 1.02]}
            scale={0.47}
          />
          <mesh
            name="Disc_171"
            geometry={nodes.Disc_171.geometry}
            material={materials.Mat}
            position={[-12.27, 73.33, 34.67]}
            rotation={[2.4, -1.02, -2.62]}
            scale={0.55}
          />
          <mesh
            name="Pyramid_172"
            geometry={nodes.Pyramid_172.geometry}
            material={materials.Mat}
            position={[-3.93, 78.06, 0.23]}
            rotation={[3.01, -0.03, -1]}
          />
          <mesh
            name="Sphere_173"
            geometry={nodes.Sphere_173.geometry}
            material={materials.Mat}
            position={[-10.65, 88.08, 33.58]}
            rotation={[-0.57, -0.16, 1.32]}
            scale={0.6}
          />
          <mesh
            name="Disc_174"
            geometry={nodes.Disc_174.geometry}
            material={materials.Mat}
            position={[6.4, 131.64, 7.14]}
            rotation={[2.89, 1.17, 1.74]}
          />
          <mesh
            name="Pyramid_175"
            geometry={nodes.Pyramid_175.geometry}
            material={materials.Mat}
            position={[-10.67, 90.62, 31.58]}
            rotation={[0.55, -0.64, -1.83]}
            scale={0.86}
          />
          <mesh
            name="Platonic_176"
            geometry={nodes.Platonic_176.geometry}
            material={materials.Mat}
            position={[18.85, 98.76, -15.61]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={0.89}
          />
          <mesh
            name="Sphere_177"
            geometry={nodes.Sphere_177.geometry}
            material={materials.Mat}
            position={[20.13, 100.5, -17.52]}
            rotation={[-0.39, -1.25, 0.83]}
            scale={0.81}
          />
          <mesh
            name="Pyramid_178"
            geometry={nodes.Pyramid_178.geometry}
            material={materials.Mat}
            position={[-6.22, 99.1, 34.11]}
            rotation={[1.35, 1.06, 0.36]}
            scale={0.99}
          />
          <mesh
            name="Sphere_179"
            geometry={nodes.Sphere_179.geometry}
            material={materials.Mat}
            position={[9.98, 158.36, -4.17]}
            rotation={[2.75, -0.84, 2.2]}
            scale={1.49}
          />
          <mesh
            name="Disc_180"
            geometry={nodes.Disc_180.geometry}
            material={materials.Mat}
            position={[-20.14, 43.21, 1.2]}
            rotation={[0.07, -0.39, 1.66]}
            scale={0.96}
          />
          <mesh
            name="Pyramid_181"
            geometry={nodes.Pyramid_181.geometry}
            material={materials.Mat}
            position={[15.38, 10.72, 2.17]}
            rotation={[2.48, -0.3, -1.48]}
            scale={0.97}
          />
          <mesh
            name="Platonic_182"
            geometry={nodes.Platonic_182.geometry}
            material={materials.Mat}
            position={[15.72, 13.32, -1.07]}
            rotation={[0.39, -0.95, -0.54]}
            scale={0.62}
          />
          <mesh
            name="Pyramid_183"
            geometry={nodes.Pyramid_183.geometry}
            material={materials.Mat}
            position={[6.36, 135.19, 6.11]}
            rotation={[2.89, 1.17, 1.74]}
            scale={1.1}
          />
          <mesh
            name="Pyramid_184"
            geometry={nodes.Pyramid_184.geometry}
            material={materials.Mat}
            position={[2.59, 128.73, 29.83]}
            rotation={[-1.89, 1.49, 2.98]}
            scale={1.31}
          />
          <mesh
            name="Sphere_185"
            geometry={nodes.Sphere_185.geometry}
            material={materials.Mat}
            position={[0.42, 78.02, 12.64]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.52}
          />
          <mesh
            name="Disc_186"
            geometry={nodes.Disc_186.geometry}
            material={materials.Mat}
            position={[0.38, 33.1, 11.04]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={0.85}
          />
          <mesh
            name="Disc_187"
            geometry={nodes.Disc_187.geometry}
            material={materials.Mat}
            position={[-18.72, 31.2, 0.93]}
            rotation={[0.07, -0.39, 1.66]}
            scale={1.49}
          />
          <mesh
            name="Platonic_188"
            geometry={nodes.Platonic_188.geometry}
            material={materials.Mat}
            position={[4.57, 134.98, 27.94]}
            rotation={[2.72, 0.01, -1.59]}
            scale={1.27}
          />
          <mesh
            name="Pyramid_189"
            geometry={nodes.Pyramid_189.geometry}
            material={materials.Mat}
            position={[0.25, 83.44, 13.11]}
            rotation={[0.91, 0.55, -2.35]}
            scale={0.71}
          />
          <mesh
            name="Platonic_190"
            geometry={nodes.Platonic_190.geometry}
            material={materials.Mat}
            position={[16.85, 132.48, -8.82]}
            rotation={[2.14, 1.02, 2.67]}
            scale={1.2}
          />
          <mesh
            name="Platonic_191"
            geometry={nodes.Platonic_191.geometry}
            material={materials.Mat}
            position={[-11.88, 70.24, 0.36]}
            rotation={[1.51, 1.06, -0.14]}
            scale={0.63}
          />
          <mesh
            name="Pyramid_192"
            geometry={nodes.Pyramid_192.geometry}
            material={materials.Mat}
            position={[-0.81, 71.31, 13.39]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.52}
          />
          <mesh
            name="Sphere_193"
            geometry={nodes.Sphere_193.geometry}
            material={materials.Mat}
            position={[14.34, 133.94, -6.01]}
            rotation={[-1.07, 0.62, -2.55]}
            scale={1.22}
          />
          <mesh
            name="Platonic_194"
            geometry={nodes.Platonic_194.geometry}
            material={materials.Mat}
            position={[1.97, 93.35, 5.84]}
            rotation={[-0.03, -0.72, -1.74]}
            scale={1.46}
          />
          <mesh
            name="Sphere_195"
            geometry={nodes.Sphere_195.geometry}
            material={materials.Mat}
            position={[6.67, 144.34, 5.46]}
            rotation={[2.71, -0.17, 1.4]}
            scale={0.84}
          />
          <mesh
            name="Sphere_196"
            geometry={nodes.Sphere_196.geometry}
            material={materials.Mat}
            position={[2.69, 127.69, 30.82]}
            rotation={[-1.89, 1.49, 2.98]}
            scale={0.47}
          />
          <mesh
            name="Pyramid_197"
            geometry={nodes.Pyramid_197.geometry}
            material={materials.Mat}
            position={[-3.17, 59.53, 14.54]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={1.4}
          />
          <mesh
            name="Disc_198"
            geometry={nodes.Disc_198.geometry}
            material={materials.Mat}
            position={[7.07, 142.66, 5.52]}
            rotation={[-1.6, -1.08, 0.38]}
            scale={0.7}
          />
          <mesh
            name="Sphere_199"
            geometry={nodes.Sphere_199.geometry}
            material={materials.Mat}
            position={[-4.31, 53.48, 15.19]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.67}
          />
          <mesh
            name="Disc_200"
            geometry={nodes.Disc_200.geometry}
            material={materials.Mat}
            position={[-10.94, 90.95, 32.55]}
            rotation={[1.06, 0.55, -2.87]}
            scale={1.46}
          />
          <mesh
            name="Pyramid_201"
            geometry={nodes.Pyramid_201.geometry}
            material={materials.Mat}
            position={[-19.41, 32.93, 0.77]}
            rotation={[0.07, -0.39, 1.66]}
            scale={0.56}
          />
          <mesh
            name="Sphere_202"
            geometry={nodes.Sphere_202.geometry}
            material={materials.Mat}
            position={[3.6, 111.26, 36.02]}
            rotation={[-1.72, -0.94, -0.29]}
            scale={1.23}
          />
          <mesh
            name="Platonic_203"
            geometry={nodes.Platonic_203.geometry}
            material={materials.Mat}
            position={[-3.41, 37.61, 13.06]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={1.06}
          />
          <mesh
            name="Disc_204"
            geometry={nodes.Disc_204.geometry}
            material={materials.Mat}
            position={[7.62, 154.08, -0.95]}
            rotation={[-1.1, -0.6, -2.09]}
            scale={0.88}
          />
          <mesh
            name="Pyramid_205"
            geometry={nodes.Pyramid_205.geometry}
            material={materials.Mat}
            position={[1.47, 84.33, 15.65]}
            rotation={[2.39, -0.83, 1.12]}
            scale={1.32}
          />
          <mesh
            name="Platonic_206"
            geometry={nodes.Platonic_206.geometry}
            material={materials.Mat}
            position={[-6.45, 77.66, -3.31]}
            rotation={[-0.23, 0.1, 1]}
            scale={0.63}
          />
          <mesh
            name="Sphere_207"
            geometry={nodes.Sphere_207.geometry}
            material={materials.Mat}
            position={[16.64, 79.04, -23.59]}
            rotation={[-2.68, -0.37, -1.56]}
            scale={1.02}
          />
          <mesh
            name="Disc_208"
            geometry={nodes.Disc_208.geometry}
            material={materials.Mat}
            position={[7.72, 154.85, -2.32]}
            rotation={[-1.1, -0.6, -2.09]}
            scale={1.22}
          />
          <mesh
            name="Platonic_209"
            geometry={nodes.Platonic_209.geometry}
            material={materials.Mat}
            position={[-6.54, 97.43, 34.06]}
            rotation={[-3, 0.2, -1.04]}
            scale={1.5}
          />
          <mesh
            name="Platonic_210"
            geometry={nodes.Platonic_210.geometry}
            material={materials.Mat}
            position={[-3.76, 84.47, -1.76]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.32}
          />
          <mesh
            name="Disc_211"
            geometry={nodes.Disc_211.geometry}
            material={materials.Mat}
            position={[3.99, 112.17, 37.07]}
            rotation={[2.83, -1.39, 1.18]}
            scale={1.01}
          />
          <mesh
            name="Sphere_212"
            geometry={nodes.Sphere_212.geometry}
            material={materials.Mat}
            position={[4.24, 137.99, 12.52]}
            rotation={[1.42, 0.68, -1.52]}
            scale={1.23}
          />
          <mesh
            name="Pyramid_213"
            geometry={nodes.Pyramid_213.geometry}
            material={materials.Mat}
            position={[13.16, 134.99, -4.02]}
            rotation={[1.98, -0.72, 2.49]}
            scale={1.21}
          />
          <mesh
            name="Pyramid_214"
            geometry={nodes.Pyramid_214.geometry}
            material={materials.Mat}
            position={[5.16, 134.39, 10.2]}
            rotation={[1.17, -1.14, -0.85]}
            scale={1.15}
          />
          <mesh
            name="Platonic_215"
            geometry={nodes.Platonic_215.geometry}
            material={materials.Mat}
            position={[3.92, 30.59, 6.09]}
            rotation={[0.37, 0.1, 2.12]}
            scale={0.61}
          />
          <mesh
            name="Platonic_216"
            geometry={nodes.Platonic_216.geometry}
            material={materials.Mat}
            position={[0.29, 84.5, 15.12]}
            rotation={[2.31, 0.4, 2.15]}
            scale={1.02}
          />
          <mesh
            name="Disc_217"
            geometry={nodes.Disc_217.geometry}
            material={materials.Mat}
            position={[6.2, 154.37, -6.3]}
            rotation={[-1.27, -0.25, -1.65]}
            scale={1.52}
          />
          <mesh
            name="Pyramid_218"
            geometry={nodes.Pyramid_218.geometry}
            material={materials.Mat}
            position={[3.59, 138.1, 16.92]}
            rotation={[1.42, 0.68, -1.52]}
            scale={1.55}
          />
          <mesh
            name="Disc_219"
            geometry={nodes.Disc_219.geometry}
            material={materials.Mat}
            position={[12.51, 162.33, -8.83]}
            rotation={[2.75, -0.84, 2.2]}
            scale={0.71}
          />
          <mesh
            name="Platonic_220"
            geometry={nodes.Platonic_220.geometry}
            material={materials.Mat}
            position={[4.01, 137.66, 12.37]}
            rotation={[0.64, 0.49, 2.07]}
            scale={1.02}
          />
          <mesh
            name="Platonic_221"
            geometry={nodes.Platonic_221.geometry}
            material={materials.Mat}
            position={[-3.13, 104.37, 35.78]}
            rotation={[-3, 0.2, -1.04]}
            scale={0.91}
          />
          <mesh
            name="Sphere_222"
            geometry={nodes.Sphere_222.geometry}
            material={materials.Mat}
            position={[-6.57, 79.19, 0.18]}
            rotation={[3.01, -0.03, -1]}
            scale={1.17}
          />
          <mesh
            name="Pyramid_223"
            geometry={nodes.Pyramid_223.geometry}
            material={materials.Mat}
            position={[0.56, 93.46, 6.05]}
            rotation={[-2.44, 0.68, -1.88]}
            scale={1.32}
          />
          <mesh
            name="Pyramid_224"
            geometry={nodes.Pyramid_224.geometry}
            material={materials.Mat}
            position={[4.2, 27.84, 7.47]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.51}
          />
          <mesh
            name="Platonic_225"
            geometry={nodes.Platonic_225.geometry}
            material={materials.Mat}
            position={[-11.56, 71.77, 34.19]}
            rotation={[0.32, -0.3, 2.11]}
            scale={1.15}
          />
          <mesh
            name="Sphere_226"
            geometry={nodes.Sphere_226.geometry}
            material={materials.Mat}
            position={[-5.42, 98.39, 34.32]}
            rotation={[-1.72, -0.94, -0.29]}
            scale={1.27}
          />
          <mesh
            name="Pyramid_227"
            geometry={nodes.Pyramid_227.geometry}
            material={materials.Mat}
            position={[-14.34, 82.73, 33.24]}
            rotation={[-2.25, -0.96, -0.51]}
            scale={0.62}
          />
          <mesh
            name="Disc_228"
            geometry={nodes.Disc_228.geometry}
            material={materials.Mat}
            position={[3.04, 79.34, 14.31]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.82}
          />
          <mesh
            name="Sphere_229"
            geometry={nodes.Sphere_229.geometry}
            material={materials.Mat}
            position={[-0.78, 83.61, 14.35]}
            rotation={[0.91, 0.55, -2.35]}
            scale={1.52}
          />
          <mesh
            name="Pyramid_230"
            geometry={nodes.Pyramid_230.geometry}
            material={materials.Mat}
            position={[-1.74, 78.3, 13.76]}
            rotation={[0.11, 0.9, 1.35]}
            scale={1.16}
          />
          <mesh
            name="Sphere_231"
            geometry={nodes.Sphere_231.geometry}
            material={materials.Mat}
            position={[-8.9, 75.37, -1.87]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.41}
          />
          <mesh
            name="Disc_232"
            geometry={nodes.Disc_232.geometry}
            material={materials.Mat}
            position={[11.37, 160.02, -6.52]}
            rotation={[2.75, -0.84, 2.2]}
            scale={0.58}
          />
          <mesh
            name="Disc_233"
            geometry={nodes.Disc_233.geometry}
            material={materials.Mat}
            position={[7.74, 154.08, -0.76]}
            rotation={[-1.1, -0.6, -2.09]}
            scale={0.92}
          />
          <mesh
            name="Pyramid_234"
            geometry={nodes.Pyramid_234.geometry}
            material={materials.Mat}
            position={[0.06, 86.07, -3.05]}
            rotation={[2.41, -0.38, 2.02]}
            scale={0.68}
          />
          <mesh
            name="Disc_235"
            geometry={nodes.Disc_235.geometry}
            material={materials.Mat}
            position={[-3.06, 37.51, 11.38]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.63}
          />
          <mesh
            name="Sphere_236"
            geometry={nodes.Sphere_236.geometry}
            material={materials.Mat}
            position={[-18, 29.1, 2.14]}
            rotation={[3.13, -1.19, -1.71]}
            scale={0.71}
          />
          <mesh
            name="Disc_237"
            geometry={nodes.Disc_237.geometry}
            material={materials.Mat}
            position={[-15.3, 63.98, 0.86]}
            rotation={[-0.23, 0.1, 1]}
            scale={0.54}
          />
          <mesh
            name="Pyramid_238"
            geometry={nodes.Pyramid_238.geometry}
            material={materials.Mat}
            position={[-5.01, 50.24, 15.47]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.7}
          />
          <mesh
            name="Platonic_239"
            geometry={nodes.Platonic_239.geometry}
            material={materials.Mat}
            position={[-21.05, 48.62, 6.23]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={1.36}
          />
          <mesh
            name="Sphere_240"
            geometry={nodes.Sphere_240.geometry}
            material={materials.Mat}
            position={[17.88, 103.1, -16.56]}
            rotation={[0.31, 0.25, 1.43]}
            scale={0.84}
          />
          <mesh
            name="Disc_241"
            geometry={nodes.Disc_241.geometry}
            material={materials.Mat}
            position={[-3.78, 54.96, 15.23]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={1.53}
          />
          <mesh
            name="Sphere_242"
            geometry={nodes.Sphere_242.geometry}
            material={materials.Mat}
            position={[4.85, 137.33, 15.02]}
            rotation={[-1.87, -0.67, 1.42]}
            scale={1.43}
          />
          <mesh
            name="Sphere_243"
            geometry={nodes.Sphere_243.geometry}
            material={materials.Mat}
            position={[-1.28, 81.86, -0.35]}
            rotation={[3.01, -0.03, -1]}
            scale={1.28}
          />
          <mesh
            name="Disc_244"
            geometry={nodes.Disc_244.geometry}
            material={materials.Mat}
            position={[18.02, 90.87, -19.11]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.39}
          />
          <mesh
            name="Pyramid_245"
            geometry={nodes.Pyramid_245.geometry}
            material={materials.Mat}
            position={[-1.47, 82.87, -0.48]}
            rotation={[3.01, -0.03, -1]}
            scale={0.57}
          />
          <mesh
            name="Platonic_246"
            geometry={nodes.Platonic_246.geometry}
            material={materials.Mat}
            position={[-21.33, 41.27, 4.61]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={0.99}
          />
          <mesh
            name="Pyramid_247"
            geometry={nodes.Pyramid_247.geometry}
            material={materials.Mat}
            position={[0.46, 83.55, -2.41]}
            rotation={[0.39, -1.49, -1]}
            scale={1.52}
          />
          <mesh
            name="Disc_248"
            geometry={nodes.Disc_248.geometry}
            material={materials.Mat}
            position={[4.1, 119.54, 34.22]}
            rotation={[-2.36, -1.53, -0.31]}
          />
          <mesh
            name="Disc_249"
            geometry={nodes.Disc_249.geometry}
            material={materials.Mat}
            position={[3.28, 129.21, 30.5]}
            rotation={[2.72, 0.01, -1.59]}
            scale={0.6}
          />
          <mesh
            name="Platonic_250"
            geometry={nodes.Platonic_250.geometry}
            material={materials.Mat}
            position={[-17.73, 58.39, 2.87]}
            rotation={[-1.66, -0.93, 0.11]}
            scale={0.82}
          />
          <mesh
            name="Disc_251"
            geometry={nodes.Disc_251.geometry}
            material={materials.Mat}
            position={[-10.96, 71.78, 1.29]}
            rotation={[3.01, -0.03, -1]}
            scale={1.35}
          />
          <mesh
            name="Sphere_252"
            geometry={nodes.Sphere_252.geometry}
            material={materials.Mat}
            position={[18.69, 104.17, -16.42]}
            rotation={[0.31, 0.25, 1.43]}
            scale={1.22}
          />
          <mesh
            name="Platonic_253"
            geometry={nodes.Platonic_253.geometry}
            material={materials.Mat}
            position={[-18.82, 49.89, 3.97]}
            rotation={[3.13, -1.19, -1.71]}
            scale={0.83}
          />
          <mesh
            name="Sphere_254"
            geometry={nodes.Sphere_254.geometry}
            material={materials.Mat}
            position={[-0.54, 106.89, 34.36]}
            rotation={[0.04, -0.14, 1.02]}
            scale={0.99}
          />
          <mesh
            name="Disc_255"
            geometry={nodes.Disc_255.geometry}
            material={materials.Mat}
            position={[20.57, 105.77, -15.45]}
            rotation={[1.5, -1.06, -0.5]}
            scale={0.85}
          />
          <mesh
            name="Disc_256"
            geometry={nodes.Disc_256.geometry}
            material={materials.Mat}
            position={[-21.2, 53.96, 3.9]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.46}
          />
          <mesh
            name="Disc_257"
            geometry={nodes.Disc_257.geometry}
            material={materials.Mat}
            position={[-15.03, 83.08, 31.13]}
            rotation={[-0.15, -0.34, 0.97]}
            scale={0.52}
          />
          <mesh
            name="Pyramid_258"
            geometry={nodes.Pyramid_258.geometry}
            material={materials.Mat}
            position={[2.73, 134.07, 28.32]}
            rotation={[2.72, 0.01, -1.59]}
            scale={1.21}
          />
          <mesh
            name="Sphere_259"
            geometry={nodes.Sphere_259.geometry}
            material={materials.Mat}
            position={[3.59, 108.39, 6.08]}
            rotation={[0.25, 0.73, -1.84]}
            scale={1.1}
          />
          <mesh
            name="Sphere_260"
            geometry={nodes.Sphere_260.geometry}
            material={materials.Mat}
            position={[-1.07, 38.6, 9.69]}
            rotation={[0.37, 0.1, 2.12]}
            scale={0.44}
          />
          <mesh
            name="Platonic_261"
            geometry={nodes.Platonic_261.geometry}
            material={materials.Mat}
            position={[-20.43, 51.06, 2.48]}
            rotation={[0.77, -0.24, -1.25]}
            scale={0.95}
          />
          <mesh
            name="Platonic_262"
            geometry={nodes.Platonic_262.geometry}
            material={materials.Mat}
            position={[6.18, 148.24, 3.75]}
            rotation={[2.71, -0.17, 1.4]}
            scale={0.74}
          />
          <mesh
            name="Platonic_263"
            geometry={nodes.Platonic_263.geometry}
            material={materials.Mat}
            position={[-3.71, 84.61, -1.2]}
            rotation={[1.51, 1.06, -0.14]}
            scale={1.15}
          />
          <mesh
            name="Disc_264"
            geometry={nodes.Disc_264.geometry}
            material={materials.Mat}
            position={[-16.63, 61.21, 2.86]}
            rotation={[3.01, -0.03, -1]}
          />
          <mesh
            name="Sphere_265"
            geometry={nodes.Sphere_265.geometry}
            material={materials.Mat}
            position={[-5.51, 42.67, 11.73]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.46}
          />
          <mesh
            name="Pyramid_266"
            geometry={nodes.Pyramid_266.geometry}
            material={materials.Mat}
            position={[-22, 40.16, 4.12]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={0.52}
          />
          <mesh
            name="Sphere_267"
            geometry={nodes.Sphere_267.geometry}
            material={materials.Mat}
            position={[-10.71, 89.29, 33.78]}
            rotation={[2.83, 0.25, -1.19]}
            scale={0.7}
          />
          <mesh
            name="Pyramid_268"
            geometry={nodes.Pyramid_268.geometry}
            material={materials.Mat}
            position={[-0.97, 77.04, 12.67]}
            rotation={[0.11, 0.9, 1.35]}
            scale={1.37}
          />
          <mesh
            name="Platonic_269"
            geometry={nodes.Platonic_269.geometry}
            material={materials.Mat}
            position={[2.47, 110.98, 37.9]}
            rotation={[-3, 0.2, -1.04]}
            scale={1.32}
          />
          <mesh
            name="Sphere_270"
            geometry={nodes.Sphere_270.geometry}
            material={materials.Mat}
            position={[3.22, 112.48, 38.11]}
            rotation={[2.71, -0.16, 2.12]}
            scale={0.69}
          />
          <mesh
            name="Sphere_271"
            geometry={nodes.Sphere_271.geometry}
            material={materials.Mat}
            position={[0.1, 33.01, 10.86]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.91}
          />
          <mesh
            name="Platonic_272"
            geometry={nodes.Platonic_272.geometry}
            material={materials.Mat}
            position={[3.25, 104.11, 5.67]}
            rotation={[-0.05, -0.82, -1.74]}
            scale={0.54}
          />
          <mesh
            name="Platonic_273"
            geometry={nodes.Platonic_273.geometry}
            material={materials.Mat}
            position={[15.91, 80.42, -23.14]}
            rotation={[2.89, -0.29, 1.35]}
            scale={0.99}
          />
          <mesh
            name="Platonic_274"
            geometry={nodes.Platonic_274.geometry}
            material={materials.Mat}
            position={[-11.05, 88.64, 33.14]}
            rotation={[-0.57, -0.16, 1.32]}
            scale={1.41}
          />
          <mesh
            name="Pyramid_275"
            geometry={nodes.Pyramid_275.geometry}
            material={materials.Mat}
            position={[1.09, 79.28, 17.11]}
            rotation={[-2.85, -0.86, -1.21]}
            scale={0.88}
          />
          <mesh
            name="Pyramid_276"
            geometry={nodes.Pyramid_276.geometry}
            material={materials.Mat}
            position={[-1.65, 81.49, 15.86]}
            rotation={[3.05, 0.67, -1.38]}
            scale={0.93}
          />
          <mesh
            name="Disc_277"
            geometry={nodes.Disc_277.geometry}
            material={materials.Mat}
            position={[-7.13, 77.8, 0.38]}
            rotation={[3.01, -0.03, -1]}
            scale={0.92}
          />
          <mesh
            name="Sphere_278"
            geometry={nodes.Sphere_278.geometry}
            material={materials.Mat}
            position={[15.98, 13.36, -0.3]}
            rotation={[1.77, -0.28, 1.45]}
            scale={1.31}
          />
          <mesh
            name="Platonic_279"
            geometry={nodes.Platonic_279.geometry}
            material={materials.Mat}
            position={[2.18, 36.45, 9.87]}
            rotation={[1.74, -1.08, 2.86]}
            scale={0.45}
          />
          <mesh
            name="Sphere_280"
            geometry={nodes.Sphere_280.geometry}
            material={materials.Mat}
            position={[2.47, 79.58, 13.82]}
            rotation={[-0.25, -0.64, 1.29]}
            scale={0.48}
          />
          <mesh
            name="Pyramid_281"
            geometry={nodes.Pyramid_281.geometry}
            material={materials.Mat}
            position={[-14.77, 62.31, 1.76]}
            rotation={[-1.66, -0.93, 0.11]}
            scale={0.46}
          />
          <mesh
            name="Pyramid_282"
            geometry={nodes.Pyramid_282.geometry}
            material={materials.Mat}
            position={[7.82, 155.6, -3.06]}
            rotation={[-0.25, 0.76, -2.3]}
            scale={1.4}
          />
          <mesh
            name="Disc_283"
            geometry={nodes.Disc_283.geometry}
            material={materials.Mat}
            position={[-21.24, 51.33, 5.34]}
            rotation={[2.61, 0.37, 1.71]}
            scale={1.12}
          />
          <mesh
            name="Sphere_284"
            geometry={nodes.Sphere_284.geometry}
            material={materials.Mat}
            position={[-23.51, 48.24, 5.17]}
            rotation={[-2.94, 0.37, -1.71]}
            scale={0.81}
          />
          <mesh
            name="Disc_285"
            geometry={nodes.Disc_285.geometry}
            material={materials.Mat}
            position={[3.18, 110.6, 35.02]}
            rotation={[0.04, -0.14, 1.02]}
            scale={0.81}
          />
          <mesh
            name="Sphere_286"
            geometry={nodes.Sphere_286.geometry}
            material={materials.Mat}
            position={[4.51, 127.96, 29.6]}
            rotation={[-2.36, -1.53, -0.31]}
            scale={0.92}
          />
          <mesh
            name="Disc_287"
            geometry={nodes.Disc_287.geometry}
            material={materials.Mat}
            position={[3.4, 129.13, 30.54]}
            rotation={[2.72, 0.01, -1.59]}
            scale={1.11}
          />
          <mesh
            name="Disc_288"
            geometry={nodes.Disc_288.geometry}
            material={materials.Mat}
            position={[3.93, 107.06, 6.24]}
            rotation={[-0.05, -0.82, -1.74]}
            scale={0.78}
          />
          <mesh
            name="Platonic_289"
            geometry={nodes.Platonic_289.geometry}
            material={materials.Mat}
            position={[2.2, 30.66, 7.87]}
            rotation={[-1.34, 0.96, -2.91]}
            scale={0.93}
          />
          <mesh
            name="Sphere_290"
            geometry={nodes.Sphere_290.geometry}
            material={materials.Mat}
            position={[-4.63, 102.16, 34.71]}
            rotation={[1.35, 1.06, 0.36]}
            scale={0.7}
          />
          <mesh
            name="Sphere_291"
            geometry={nodes.Sphere_291.geometry}
            material={materials.Mat}
            position={[3.62, 138.6, 24.42]}
            rotation={[1.11, -0.94, 0.02]}
            scale={1.11}
          />
          <mesh
            name="Sphere_292"
            geometry={nodes.Sphere_292.geometry}
            material={materials.Mat}
            position={[4.06, 121.08, 34.13]}
            rotation={[2.72, 0.01, -1.59]}
            scale={0.87}
          />
          <mesh
            name="Sphere_293"
            geometry={nodes.Sphere_293.geometry}
            material={materials.Mat}
            position={[-5.08, 52.79, 15.13]}
            rotation={[0.11, 0.9, 1.35]}
            scale={0.53}
          />
          <mesh
            name="Sphere_294"
            geometry={nodes.Sphere_294.geometry}
            material={materials.Mat}
            position={[-5, 40.78, 15.95]}
            rotation={[-2.67, -0.16, -2.1]}
            scale={0.82}
          />
          <mesh
            name="Disc_295"
            geometry={nodes.Disc_295.geometry}
            material={materials.Mat}
            position={[-0.29, 39.51, 9.96]}
            rotation={[0.37, 0.1, 2.12]}
            scale={1.05}
          />
          <mesh
            name="Platonic_296"
            geometry={nodes.Platonic_296.geometry}
            material={materials.Mat}
            position={[-19.07, 49.26, 4.59]}
            rotation={[3.13, -1.19, -1.71]}
            scale={1.46}
          />
          <mesh
            name="Platonic_297"
            geometry={nodes.Platonic_297.geometry}
            material={materials.Mat}
            position={[20.58, 101.97, -14.55]}
            rotation={[-2.7, -0.23, -1.4]}
            scale={1.3}
          />
          <mesh
            name="Pyramid_298"
            geometry={nodes.Pyramid_298.geometry}
            material={materials.Mat}
            position={[3.23, 121.51, 32.96]}
            rotation={[-1.89, 1.49, 2.98]}
            scale={1.14}
          />
          <mesh
            name="Pyramid_299"
            geometry={nodes.Pyramid_299.geometry}
            material={materials.Mat}
            position={[5.41, 133.6, 9.76]}
            rotation={[1.17, -1.14, -0.85]}
            scale={0.96}
          />
        </group>
        <mesh
          name="Studio"
          geometry={nodes.Studio.geometry}
          material={new THREE.MeshBasicMaterial({color: '#ffffff', transparent: true, opacity: 0})}
          position={[-645.91, -1.93, -95.36]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/robo.glb");
