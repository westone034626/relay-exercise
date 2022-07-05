import { useEffect, useRef, CSSProperties, useState, useCallback } from "react";
import useClickEffect from "../hook/useClickEffect";

const EditorModal = ({
  style,
  onClose,
  onSave,
}: {
  style?: CSSProperties;
  onClose: () => void;
  onSave: (data: string) => void;
}) => {
  const [controllerBottom, setControllerBottom] = useState(0);
  useEffect(() => {
    const initialViewportHeight = window.visualViewport.height;
    function resizeHandler() {
      const currentViewportHeight = window.visualViewport.height;
      setControllerBottom(initialViewportHeight - currentViewportHeight);
    }
    window.visualViewport.addEventListener("resize", resizeHandler);
    return () =>
      window.visualViewport.removeEventListener("resize", resizeHandler);
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => {
    inputRef.current?.focus();
  };
  useEffect(() => {
    focusInput();
  }, []);

  const [blurAccept, setBlurAccept] = useState(true);

  const controllerRef = useRef<HTMLDivElement | null>(null);
  const onTargetElementClick = useCallback(
    (isClicked: boolean) => {
      setBlurAccept(!isClicked);
    },
    [setBlurAccept]
  );
  useClickEffect(controllerRef, onTargetElementClick);

  function blurHandler() {
    if (blurAccept) {
      setControllerBottom(0);
    } else {
      focusInput();
    }
  }

  const [text, setText] = useState("");

  const onReset = () => {
    setText("");
    setBlurAccept(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        ...style,
      }}
    >
      <input
        onChange={({ target: { value } }) => setText(value)}
        value={text}
        style={{
          fontSize: "16px",
          position: "sticky",
          top: 0,
          width: "100%",
          boxSizing: "content-box",
          border: 0,
          borderBottom: "1px solid black",
          padding: 0,
          margin: 0,
          borderRadius: 0,
        }}
        onBlur={blurHandler}
        ref={inputRef}
      />
      <div
        ref={controllerRef}
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          bottom: controllerBottom,
          backgroundColor: "white",
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          onClick={onClose}
          style={{ flex: 1, padding: "24px 0", textAlign: "center" }}
        >
          닫기
        </div>
        <div
          onClick={() => {
            onReset();
            focusInput();
          }}
          style={{ flex: 1, padding: "24px 0", textAlign: "center" }}
        >
          비우기
        </div>
        {Boolean(text) && (
          <div
            onClick={() => {
              onSave(text);
              onClose();
            }}
            style={{
              flex: 1,
              padding: "24px 0",
              textAlign: "center",
            }}
          >
            저장
          </div>
        )}
      </div>
    </div>
  );
};

export default EditorModal;

// useEffect(() => {
//   function scrollHandler() {
//     // inputRef.current?.blur();
//     onClose();
//   }
//   window.addEventListener("scroll", scrollHandler);
//   return () => window.removeEventListener("scroll", scrollHandler);
// }, []);
