import _ from "lodash";
import { useEffect, useMemo, useRef, CSSProperties } from "react";

const EditorModal = ({
  style,
  onClose,
  onSave,
}: {
  style?: CSSProperties;
  onClose: () => void;
  onSave: (data: string) => void;
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const height = useMemo(() => window.visualViewport.height, []);
  useEffect(() => {
    function resizeHandler() {
      divRef.current &&
        (divRef.current.style.bottom = `${
          height - window.visualViewport.height
        }px`);
    }
    window.visualViewport.addEventListener("resize", resizeHandler);
    return () =>
      window.visualViewport.removeEventListener("resize", resizeHandler);
  }, []);

  function blurHandler() {
    // divRef.current && (divRef.current.style.bottom = "0px");
    onClose();
  }

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function scrollHandler() {
      inputRef.current?.blur();
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

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
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          bottom: 0,
          backgroundColor: "white",
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
        ref={divRef}
      >
        <div onClick={onClose} style={{ padding: 24 }}>
          취소
        </div>
        <div
          onClick={() => {
            onSave(inputRef.current?.value || "");
            onClose();
          }}
          style={{ padding: 24 }}
        >
          저장
        </div>
      </div>
    </div>
  );
};

export default EditorModal;
